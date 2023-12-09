import { reactive } from "vue";
import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === "production" ? undefined : "http://bulbaman.me:16001";

export const socket = io('http://localhost:3001', {
	// withCredentials: true,
	secure: false,
	extraHeaders: {
		"Access-Control-Allow-Origin": "http://bulbaman.me:16001"
	}
});