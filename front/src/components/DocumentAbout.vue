<template>
	<div class="document-about">
		<DocumentAboutUI customer />
		<DocumentAboutUI />
	</div>
</template>

<script lang="ts">
export default {
	name: 'DocumentAbout'
}
</script>

<style lang="sass" scoped>
.document-about
	margin-top: 24px
	display: flex
	grid-gap: 24px
</style>