import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
import axios from 'axios';
import { Discussoin } from '../types/discussion';

export const useDiscussionStore = defineStore('discussion', () => {
	const allDiscussions = ref(null);

	const currentDiscussion: Ref<Discussoin | null> = ref(null);

	const fetchAllDiscussions = () => {
		axios.get('https://mg.vp-pspu.cf/api/discussion').then((response) => {
			allDiscussions.value = response.data;
		})
	}

	const setDiscussion = async (disc: Discussoin) => {
		currentDiscussion.value = disc;

		let newData = JSON.stringify({
			providerId: disc?.providerId,
			customerId: disc?.customerId
		});

		localStorage.setItem('currentIdenty', newData);
	}

	const getCurrentDiscussion = async () => {
		currentDiscussion.value = JSON.parse(localStorage.getItem('currentIdenty')) as Discussoin;
	}

	return {allDiscussions, fetchAllDiscussions, setDiscussion, currentDiscussion, getCurrentDiscussion }
});