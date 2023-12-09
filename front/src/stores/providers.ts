import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useProvidersStore = defineStore('providers', () => {
	const allProviders = ref(null);

	const fetchAllProviders = async () => {
		axios.get('http://localhost:3001/api/users').then((response) => {
			allProviders.value = response.data;
		})
	}

	return {allProviders, fetchAllProviders}
});