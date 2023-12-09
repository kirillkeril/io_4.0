<script setup lang="ts">
import HeaderBlock from "./components/HeaderBlock.vue";
import FooterBlock from "./components/FooterBlock.vue";
import NavBar from "./components/NavBar.vue";
import { useMessagesStore } from "./stores/messages";
import { socket } from "./socket";

const { bindEvents } = useMessagesStore();
// remove any existing listeners (after a hot module replacement)
socket.off();

bindEvents();
</script>

<template>
	<div class="app">
		<HeaderBlock />
		<main>
			<NavBar />
			<router-view></router-view>
		</main>
		<FooterBlock />
	</div>
</template>

<style scoped lang="sass">
@import './assets/sass/colors'
.app
	min-height: 100vh
	display: grid
	grid-template-rows: auto 1fr auto

	& main
		display: flex

</style>
