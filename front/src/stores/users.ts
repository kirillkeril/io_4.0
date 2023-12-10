import { defineStore } from 'pinia'
import { ComputedRef, Ref, computed, ref } from 'vue'
import { User } from '../types/user';
import axios from 'axios';

export const useUserStore = defineStore('users', () => {
	const user: ComputedRef<User | null> = computed(() => _user.value || JSON.parse(localStorage.getItem('user')) as User);
	const _user: Ref<User | null> = ref(null);
	const userId: Ref<string> = ref('6574abbc6d7e0a2e72b0b58a')

	const getUser = async () => {
		_user.value = await getUserById(userId.value);
		localStorage.setItem('user', JSON.stringify(_user.value));
	}

	const getUserById = async (id: string): Promise<User | null> => {
		try {
			const res = await axios.get<User>(`http://localhost:3001/api/users/${id}`);
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