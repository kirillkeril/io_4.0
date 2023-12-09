import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
import { User } from '../types/user';
import axios from 'axios';

export const useUserStore = defineStore('users', () => {
	const user: Ref<User | null> = ref(null);

	const getUser = async (id: string) => {
		try {
			const res = await axios.get<User>(`http://localhost:3001/api/users/${id}`);
			console.log(res.data);
			user.value = res.data;
		} catch(e) {
			console.log(e);			
		}
	}

	return {user, getUser}
});