import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useItemStore = defineStore('item', () => {
	const item = ref(1);

	const incItem = () => {
		item.value = item.value  + 1;
	}

	return {item, incItem}
});