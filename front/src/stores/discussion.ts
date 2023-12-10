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
		axios.get('http://localhost:3001/api/discussion').then((response) => {
			allDiscussions.value = response.data;
		})
	}

	const setDiscussion = async (disc: Discussoin) => {
		_currentDiscussion.value = disc;

		let newData = JSON.stringify({
			providerId: disc?.providerId,
			customerId: disc?.customerId
		});

		localStorage.setItem('currentIdenty', newData);
	}

	const setCurrentAddressee = async (addresseeId: string) => {
		localStorage.setItem('addresseeId', addresseeId);
	}

	const getCurrentAddressee = async () => {
		return localStorage.getItem('addresseeId');
	}

	const getCurrentDiscussion = async () => {
		_currentDiscussion.value = JSON.parse(localStorage.getItem('currentIdenty')) as Discussoin;
		return _currentDiscussion.value;
	}

	const startDiscussion = async (addresseeId: string) => {
		if (userStore.user == null) return;
		const newDisck: Ref<Discussoin | null> = ref(null);
		if (userStore.user.role == 'customer')
			newDisck.value = { customerId: userStore.user._id, providerId: addresseeId, startDate: Date.now().toLocaleString() };
		if (userStore.user.role == 'provider')
			newDisck.value = { customerId: addresseeId, providerId: userStore.user!._id, startDate: Date.now().toLocaleString() };
		const res = await axios.post<Discussoin>('http://localhost:3001/api/discussion', newDisck);
		console.log(newDisck);		
		setDiscussion(res.data);
		setCurrentAddressee(addresseeId);
		router.push(`/suppliers/discussion/${addresseeId}`);
	}

	return { allDiscussions, fetchAllDiscussions, setDiscussion, currentDiscussion, addressee, getCurrentDiscussion, startDiscussion, getCurrentAddressee }
});