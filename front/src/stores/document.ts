import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useDocumentsStore = defineStore('document', () => {
	const formData = ref({});
	
	const sendNewVersion = () => {
		let local = JSON.parse(localStorage.getItem('currentIdenty'));
		formData.value.ProviderID = local.providerId;
		formData.value.CustomerID = local.customerId;

		axios.post('https://mg.vp-pspu.cf/back/compare-json', formData.value).then((response) => {
			console.log(response);
		})
	}

	const setNewFormData = (newData: Object) => {
		formData.value = newData;
	}

	return {sendNewVersion, setNewFormData}
});