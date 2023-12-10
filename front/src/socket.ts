import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === "production" ? undefined : "https://mg.vp-pspu.cf";

export const socket = io('http://localhost:3001', {
	autoConnect: false,
	secure: false,
	extraHeaders: {
		"Access-Control-Allow-Origin": "http://localhost:3001"
	}
});