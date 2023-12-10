import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export enum states {
	input = 'Ввод сведений',
	pending = 'На рассмотрении',
	rejected = 'Отказ',
	success = 'Принят'
}
export const useDocumentsStore = defineStore('document', () => {
	const formData = ref({});
	const lastVersionData = ref();
	const state = ref(states.input);
	const allVersions = ref([]);
	const dataPdf = ref();
	
	const sendNewVersion = (resetData) => {
		let local = JSON.parse(localStorage.getItem('currentIdenty'));
		console.log(formData.value);
		/* @ts-ignore */
		formData.value.ProviderID = local.providerId;
		/* @ts-ignore */
		formData.value.CustomerID = local.customerId;
		console.log(formData.value);
		axios.post('https://mg.vp-pspu.cf/back/compare-json', formData.value).then((response) => {
			console.log(response);
		})
	}

	const getLastVersion = async () => {
		let local = JSON.parse(localStorage.getItem('currentIdenty'));

		let id = await axios.get(`https://mg.vp-pspu.cf/back/get_all_versions/?ProviderID=${local.providerId}&CustomerID=${local.customerId}`)

		console.log(id);

		id = id.data[id.data.length - 1]._id;

		const res = await axios.post('https://mg.vp-pspu.cf/back/show_specific_version', { _id: id });

		lastVersionData.value = res.data;

		fetchAllVersions();
	}

	const fetchAllVersions = async () => {
		let local = JSON.parse(localStorage.getItem('currentIdenty'));

		let res = await axios.get(`https://mg.vp-pspu.cf/back/get_all_versions/?ProviderID=${local.providerId}&CustomerID=${local.customerId}`)

		allVersions.value = res.data;
	}

	const downloadPdf = async (id) => {
		window.open(
			`https://mg.vp-pspu.cf/back/pdf-file?_id=${id}`,
			'_blank'
		);
	}

	const setNewFormData = (newData: Object) => {
		formData.value = newData;

		state.value = states.pending;
	}

	const setSuccessStatus = () => {
		state.value = states.success;

		formData.value.Status = states.success;

		sendNewVersion();
	}

	const setRejectedStatus = () => {
		state.value = states.rejected;

		formData.value.Status = states.rejected;

		sendNewVersion();
	}

	const setMessage = (text: String) => {
		formData.value.Message = text;

		sendNewVersion();
	}

	return {
		sendNewVersion, 
		setNewFormData, 
		getLastVersion, 
		setMessage, 
		lastVersionData, 
		downloadPdf, 
		setSuccessStatus, 
		setRejectedStatus, 
		allVersions, 
		dataPdf,
		state
	}
});