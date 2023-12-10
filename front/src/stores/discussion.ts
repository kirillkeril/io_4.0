import { defineStore } from 'pinia'
import { Ref, ref, ComputedRef, computed } from 'vue';
import axios from 'axios';
import { Discussoin } from '../types/discussion';
import { useUserStore } from './users';
import { User } from '../types/user';
import { useRouter } from 'vue-router';

export const useDiscussionStore = defineStore('discussion', () => {
	const allDiscussions = ref(null);
	const userStore = useUserStore();
	const router = useRouter();

	const _addressee: Ref<User | null> = ref(null);
	const addressee: ComputedRef<User | null> = computed(() => _addressee.value);
	const currentDiscussion: ComputedRef<Discussoin | null> = computed(() => _currentDiscussion.value);
	const _currentDiscussion: Ref<Discussoin | null> = ref(null);

	const fetchAllDiscussions = () => {
		axios.get('https://mg.vp-pspu.cf/api/discussion/').then((response) => {
			allDiscussions.value = response.data;
		})
	}

	const setDiscussion = async (disc: Discussoin) => {
		_currentDiscussion.value = disc;

		console.log(disc);

		let newData = JSON.stringify({ ...disc });

		localStorage.setItem('currentIdenty', newData);
	}

	const setCurrentAddressee = async (addresseeId: string) => {
		localStorage.setItem('addresseeId', addresseeId);
		_addressee.value = await userStore.getUserById(addresseeId); 
	}

	const getCurrentAddressee = async () => {
		const id = localStorage.getItem('addresseeId');
		setCurrentAddressee(id);
		return id;
	}

	const getCurrentDiscussion = async () => {
		_currentDiscussion.value = JSON.parse(localStorage.getItem('currentIdenty')) as Discussoin;
		return _currentDiscussion.value;
	}

	const startDiscussion = async (addresseeId: string) => {
		if (userStore.user == null) return;
		const newDisck: Ref<Discussoin | null> = ref(null);
		if (userStore.user.role == 'customer')
			newDisck.value = {
				customerId: userStore.user._id || '', providerId: addresseeId || '', startDate: Date.now().toLocaleString(), type: '',
				status: '',
				contractNumber: ''
			};
		if (userStore.user.role == 'provider')
			newDisck.value = {
				customerId: addresseeId || '', providerId: userStore.user._id || '', startDate: Date.now().toLocaleString(), type: '',
				status: '',
				contractNumber: ''
			};
		const res = await axios.post<Discussoin>('https://mg.vp-pspu.cf/api/discussion', newDisck.value);
		console.log(res.data);		
		setDiscussion(res.data);
		setCurrentAddressee(addresseeId);
		router.push(`/suppliers/discussion/${addresseeId}`);
	}

	return { allDiscussions, fetchAllDiscussions, setDiscussion, currentDiscussion, addressee, getCurrentDiscussion, startDiscussion, getCurrentAddressee }
});