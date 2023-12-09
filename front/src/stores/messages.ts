import { defineStore } from "pinia";
import { Ref, ref } from 'vue';
import { socket } from "../socket";
import { Message } from "../types/message";

export const useMessagesStore = defineStore("item", () => {
	const messages: Ref<Message[]> = ref([]);
	const connected: Ref<boolean> = ref(false);


	const bindEvents = () => {
		if (!socket.connected) {
			socket.connect();
			connected.value = socket.connected;
		}
		socket.on("connect", () => {
			socket.emit("findAllMessages");
			connected.value = true;
		});
		socket.on("disconnect", () => {
			connected.value = false;
			console.log('disconnect');
		});
		socket.on('newMessageCreated', (res) => {
			const message: Message = JSON.parse(res) as Message;
			const a = messages.value.push(message);
			console.log(a);			
		});
		socket.on('allMessagesFinded', (res) => {
			const message: Message = JSON.parse(res) as Message;
			messages.value.push(message);
		});
	}

	const createMessage = (message: Message) => {
		socket.emit("newMessage", JSON.stringify(message));
	}

	return { messages, bindEvents, createMessage, connected }
});