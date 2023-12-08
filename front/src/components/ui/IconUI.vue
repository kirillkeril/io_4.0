<template>
	<InlineSvg svg="mail"/>
</template>

<script>
import InlineSvg from "../InlineSvg.vue";

export default {
	props: {
		icon: {
			type: String,
			default: 'mail'
		},
		alt: {
			type: String,
			default: ''
		}
	},
	components: { InlineSvg },
	name: 'IconUI'
}
</script>

<style lang="sass" scoped>

</style>