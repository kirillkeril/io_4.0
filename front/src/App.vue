<script setup lang="ts">
import HeaderBlock from "./components/HeaderBlock.vue";
import FooterBlock from "./components/FooterBlock.vue";

import { useItemStore } from "./stores/messages";
import { useConnectionStore } from "./stores/connection";
import { socket } from "./socket";

const itemStore = useItemStore();
const connectionStore = useConnectionStore();

// remove any existing listeners (after a hot module replacement)
socket.off();

itemStore.bindEvents();
connectionStore.bindEvents();
</script>

<template>
  <div class="app">
	<HeaderBlock />
	<main>
		<router-view></router-view>
	</main>
	<FooterBlock />
  </div>  
</template>

<style scoped lang="sass">
.app
	min-height: 100vh
	display: grid
	grid-template-rows: auto 1fr auto

</style>
