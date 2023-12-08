<script lang="ts">
import { defineAsyncComponent } from 'vue';

export default {
	props: {
		svg: {
			type: String,
			required: true,
		},
	},

	computed: {
		dynamicComponent() {
			const name = this.svg;

			return defineAsyncComponent(() => import(`../assets/svg/${name}.svg`));
		},
	},
};
</script>

<template>
	<component :is="dynamicComponent" />
</template>
