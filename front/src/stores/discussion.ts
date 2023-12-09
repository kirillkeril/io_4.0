import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
import axios from 'axios';
import { Discussoin } from '../types/discussion';

export const useDiscussionStore = defineStore('discussion', () => {
	const allDiscussions = ref(null);

	const currentDiscussion: Ref<Discussoin | null> = ref(null);

	const fetchAllDiscussions = async () => {
		axios.get('http://localhost:3001/api/discussion').then((response) => {
			allDiscussions.value = response.data;
		})
	}

	const setDiscussion = async (disc: Discussoin) => {
		currentDiscussion.value = disc;
	} 

	return {allDiscussions, fetchAllDiscussions, setDiscussion, currentDiscussion }
});