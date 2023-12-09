import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
import { User } from '../types/user';
import axios from 'axios';

export const useUserStore = defineStore('users', () => {
	const user: Ref<User | null> = ref(null);

	const getUser = async (id: string) => {
		try {
			const res = await axios.get<User>(`https://mg.vp-pspu.cf/api/users/${id}`);
			user.value = res.data;
		} catch(e) {
			console.log(e);			
		}
	}

	return {user, getUser}
});