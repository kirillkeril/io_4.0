<template>
	<div>
		<h1 @click="incItem">MainPage</h1>
		{{ item }}
	</div>
</template>

<script lang="ts">
import { useItemStore } from '../stores/test'
import { storeToRefs } from 'pinia'

export default {
	name: 'MainPage',

	setup() {
		const itemStore = useItemStore();
		const { item } = storeToRefs(itemStore);
		const { incItem } = itemStore;
		return { item, incItem }
	}
}
</script>

<style></style>