<script setup lang="ts">
import HeaderBlock from "./components/HeaderBlock.vue";
import FooterBlock from "./components/FooterBlock.vue";
import NavBar from "./components/NavBar.vue";
import { useUserStore } from './stores/users';
import { socket } from "./socket";

const { getUser } = useUserStore();
// remove any existing listeners (after a hot module replacement)
socket.off();
getUser('6574396936f05d19e2d31f6a');
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

function useUserStore() {
  throw new Error("Function not implemented.");
}

function useUserStore(): { getUser: any; } {
  throw new Error("Function not implemented.");
}
