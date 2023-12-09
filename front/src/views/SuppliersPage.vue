<template>
	<section class="suppliers">
		<div class="suppliers__title">
			<h1>Обсуждение</h1>
		</div>
		<div class="suppliers__body">
			<DiscussionTable />
		</div>
	</section>
</template>

<script lang="ts">
import DiscussionTable from '../components/DiscussionTable.vue'

export default {
	name: 'SuppliersPage',
	components: {
		DiscussionTable
	}
}
</script>

<style lang="sass" scoped>
.suppliers
	width: 100%
	padding: 20px 24px 24px 24px
	display: flex
	flex-direction: column
	grid-gap: 24px

	&__title
		& h1
			font-size: 36px

	&__body
		width: 100%
		flex: 1
		background: #fff
		border-radius: 32px
		max-height: calc(100vh - 210px)
		overflow-y: auto
</style>