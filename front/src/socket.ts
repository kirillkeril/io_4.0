import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
	connected: false,
	fooEvents: [],
	barEvents: []
});

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === "production" ? undefined : "http://bulbaman.me:16001";

export const socket = io('http://localhost:3001', {
	// withCredentials: true,
	secure: false,
	extraHeaders: {
		"Access-Control-Allow-Origin": "http://bulbaman.me:16001"
	}
});

socket.on("connect", () => {
	state.connected = true;
	console.log('connected');
});

socket.on("disconnect", () => {
	state.connected = false;
});

socket.on("foo", (...args) => {
	state.fooEvents.push(args);
});

socket.on("bar", (...args) => {
	state.barEvents.push(args);
});

socket.on('newMessage', (msg: any) => {
	console.log(msg);	
})

socket.emit('newMessage', {text: "aaaaaaaaaaaaaaaaaaaa"});
socket.emit('findAllMessages');