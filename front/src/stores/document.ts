import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
import axios from 'axios'

export enum states {
	input = 'Ввод сведений',
	pending = 'На рассмотрении',
	rejected = 'Отказ',
	success = 'Принят'
}
export const useDocumentsStore = defineStore('document', () => {
	const formData: Ref<FormData> = ref(new FormData());
	const lastVersionData = ref();
	const state = ref(states.input);
	const allVersions = ref([]);
	const dataPdf = ref();
	const providerAccepted: Ref<boolean> = ref(false);
	const customerAccepted: Ref<boolean> = ref(false);
	const actVal: Ref<string> = ref('');

	const userStore = useUserStore();

	const sendNewVersion = async () => {
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
		await getCurrentVersion();
		const res = await axios.post('https://mg.vp-pspu.cf/back/compare-json', formData.value);
		validateStatus(res.data);
		await axios.post('http://localhost:3001/api/mail', {email: "kirillagishin@ya.ru", message: "Привет! Вам уведомление!"});
	}

	const validateStatus = (res) => {
		if(res.Podpisant == "True" && res.Postavshik == "True"){
			state.value = states.success;
		}
	}

	const getCurrentVersion = async () => {
		const res = await axios.get('https://mg.vp-pspu.cf/back/get_current_version');
		actVal.value = res.data['_id'];
		console.log(res.data);
		
	}

	const getLastVersion = async () => {
		let local = JSON.parse(localStorage.getItem('currentIdenty'));

		let id = await axios.get(`https://mg.vp-pspu.cf/back/get_all_versions/?ProviderID=${local.providerId}&CustomerID=${local.customerId}`)

		console.log(id);

		id = id.data[id.data.length - 1]._id ?? 0;

		const res = await axios.post('https://mg.vp-pspu.cf/back/show_specific_version', { _id: id });

		lastVersionData.value = res.data;

		fetchAllVersions();
	}

	const fetchAllVersions = async () => {
		let local = JSON.parse(localStorage.getItem('currentIdenty'));

		let res = await axios.get(`https://mg.vp-pspu.cf/back/get_all_versions/?ProviderID=${local.providerId}&CustomerID=${local.customerId}`)

		allVersions.value = res.data;
	}

	const downloadPdf = async () => {
		window.open(
			`https://mg.vp-pspu.cf/back/pdf-file?_id=${actVal.value}`,
			'_blank'
		);
	}


	const setNewFormData = (newData: Object) => {
		console.log(newData);

		/*@ts-ignore*/
		formData.value = newData;

		state.value = states.pending;
	}

	const setSuccessStatus = () => {
		state.value = states.success;

		/*@ts-ignore*/
		formData.value.Status = states.success;

		sendNewVersion();
	}

	const setRejectedStatus = () => {
		state.value = states.rejected;


		/* @ts-ignore*/
		formData.value.Status = states.rejected;

		sendNewVersion();
	}


	const setMessage = (text: String) => {
		/* @ts-ignore */
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