import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useDiscussionStore = defineStore('discussion', () => {
	const allDiscussion = ref(null);

	const fetchAllDiscussions = async () => {
		axios.get('https://mg.vp-pspu.cf/api/discussion').then((response) => {
			allDiscussion.value = response.data;
		})
	}

	return {allDiscussion, fetchAllDiscussions}
});