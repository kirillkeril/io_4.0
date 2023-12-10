import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useProvidersStore = defineStore('providers', () => {
	const allProviders = ref(null);

	const fetchAllProviders = async () => {
		axios.get('https://mg.bp-pspu.cfapi/users').then((response) => {
			allProviders.value = response.data;
		})
	}

	return {allProviders, fetchAllProviders}
});