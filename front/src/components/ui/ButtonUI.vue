<template>
	<router-link v-if="link.length > 0" :to="link">
		<slot></slot>
	</router-link>

	<button v-else>
		<slot></slot>
	</button>
</template>

<script lang="ts">
export default {
	props: {
		link: {
			type: String,
			default: '',
		}
	},
	name: 'ButtonUI'
}
</script>

<style>

</style>