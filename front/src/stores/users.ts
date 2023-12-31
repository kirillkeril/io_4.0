import { defineStore } from 'pinia'
import { ComputedRef, Ref, computed, ref } from 'vue'
import { User } from '../types/user';
import axios from 'axios';

export const useUserStore = defineStore('users', () => {
	const user: ComputedRef<User | null> = computed(() => _user.value || JSON.parse(localStorage.getItem('user')) as User);
	const _user: Ref<User | null> = ref(null);
	const userId: Ref<string> = ref('65759a85c1ea90b6f9e00167')

	const getUser = async () => {
		_user.value = await getUserById(userId.value);
		localStorage.setItem('user', JSON.stringify(_user.value));
	}

	const getUserById = async (id: string): Promise<User | null> => {
		try {
			const res = await axios.get<User>(`https://mg.vp-pspu.cf/api/users/${id}`);
			console.log(res.data);
			_user.value = res.data;
			return res.data;
		} catch (e) {
			console.log(e);
			return null;
		}
	}

	return { user, getUser, getUserById }
});