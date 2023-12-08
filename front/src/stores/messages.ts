import { defineStore } from "pinia";
import { ref } from 'vue'
import { socket } from "../socket";

export const useItemStore = defineStore("item", () => {
	const items = ref([]);

	const bindEvents = () => {
		// sync the list of items upon connection
		socket.on("connect", () => {
			socket.emit("item:list", (res) => {
				console.log(res);
				items.value = res.data;
			});
		});

		// update the store when an item was created
		socket.on("item:created", (item) => {
			console.log(item);
			items.value.push(item);
		});
	}

	const createItem = (label) => {
		const item = {
			id: Date.now(), // temporary ID for v-for key
			label
		};
		items.value.push(item);

		socket.emit("item:create", { label }, (res) => {
			item.id = res.data;
		});
	}

	return { items, bindEvents, createItem }
});