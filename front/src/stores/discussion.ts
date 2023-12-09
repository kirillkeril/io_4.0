import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
import axios from 'axios';
import { Discussoin } from '../types/discussion';

export const useDiscussionStore = defineStore('discussion', () => {
	const allDiscussions: Ref<Discussoin[]> = ref([]);
	const currentDiscussion: Ref<Discussoin | null> = ref(null);

	const fetchAllDiscussions = async () => {
		axios.get('https://ai.vp-pspu.cf/api/users').then((response) => {
			console.log(response);
		})
	}

	const setDiscussion = (discussion: Discussoin) => {
		currentDiscussion.value = discussion;
	}

	return { allDiscussions, fetchAllDiscussions, setDiscussion, currentDiscussion }
});