import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === "production" ? undefined : "https://mg.vp-pspu.cf";

export const socket = io('https://mg.vp-pspu.cf', {
	autoConnect: false,
	secure: false,
	extraHeaders: {
		"Access-Control-Allow-Origin": "https://mg.vp-pspu.cf"
	}
});