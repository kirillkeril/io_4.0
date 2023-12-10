import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === "production" ? undefined : "http://bulbaman.me:16001";

export const socket = io('http://mg.vp-pspu.cf', {
	autoConnect: false,
	secure: false,
	extraHeaders: {
		"Access-Control-Allow-Origin": "http://bulbaman.me:16001"
	}
});