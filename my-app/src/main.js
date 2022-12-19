import App from './App.svelte';
import Home from "./pages/Home.svelte";

import "bootstrap/dist/css/bootstrap.min.css";

const app = new App({
	target: document.body,
	props: {
		name: 'Azeez'
	}
});

export default app;

// // main.js
// import App from "./App.svelte";

// const app = new App({
//   target: document.getElementById("app"),
//   hydrate: true
// });