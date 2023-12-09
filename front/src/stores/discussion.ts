import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
import axios from 'axios';
import { Discussoin } from '../types/discussion';

export const useDiscussionStore = defineStore('discussion', () => {
	const allDiscussions = ref(null);

	const fetchAllDiscussions = async () => {
		axios.get('https://mg.vp-pspu.cf/api/discussion').then((response) => {
			allDiscussions.value = response.data;
		})
	}

	return {allDiscussions, fetchAllDiscussions}
});