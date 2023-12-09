import { defineStore } from "pinia";
import { Ref, ref } from 'vue';
import { socket } from "../socket";
import { Message } from "../types/message";

export const useMessagesStore = defineStore("item", () => {
	const messages: Ref<Message[]> = ref([]);

	const bindEvents = () => {
		// sync the list of items upon connection
		socket.on("connect", () => {
			socket.emit("findAllMessages");
		});
		socket.on('message', (res) => {
			console.log(res);			
		});
	}

	const createMessage = (message: Message) => {
		console.log('create message');
		
		socket.emit("newMessage", JSON.stringify(message));
	}

	return { messages, bindEvents, createMessage }
});