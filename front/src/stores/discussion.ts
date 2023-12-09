import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useDiscussionStore = defineStore('discussion', () => {
	const allDiscussions = ref(null);

	const fetchAllDiscussions = async () => {
		axios.get('https://ai.vp-pspu.cf/api/users').then((response) => {
			console.log(response);
		})
	}

	return {allDiscussions, fetchAllDiscussions}
});