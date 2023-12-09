import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useDocumentsStore = defineStore('document', () => {
	const formData = ref({});
	const lastVersionData = ref();
	
	const sendNewVersion = () => {
		let local = JSON.parse(localStorage.getItem('currentIdenty'));
		console.log(formData.value);
		/* @ts-ignore */
		formData.value.ProviderID = local.providerId;
		/* @ts-ignore */
		formData.value.CustomerID = local.customerId;
		console.log(formData.value);
		axios.post('http://localhost:3001/back/compare-json', formData.value).then((response) => {
			console.log(response);
		})
	}

	const getLastVersion = async () => {
		let local = JSON.parse(localStorage.getItem('currentIdenty'));

		let id = await axios.get(`http://localhost:3001/back/get_all_versions/?ProviderID=${local.providerId}&CustomerID=${local.customerId}`)

		id = id.data[id.data.length - 1]._id;

		const res = await axios.post('http://localhost:3001/back/show_specific_version', { _id: id });

		lastVersionData.value = res.data;
		console.log();
	}

	const setNewFormData = (newData: Object) => {
		console.log(newData);
		formData.value = newData;
	}

	

	return {sendNewVersion, setNewFormData, getLastVersion, lastVersionData}
});