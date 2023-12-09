<template>
	<section class="discussion">
		<div class="discussion__title">
			<h1>Обсуждение</h1>
		</div>
		<div class="discussion__body">
			<DiscussionTable />
		</div>
	</section>
</template>

<script>
import DiscussionTable from '../components/DiscussionTable.vue'

export default {
	name: 'DiscussionPage',
	components: {
		DiscussionTable
	}
}
</script>

<style lang="sass" scoped>
.discussion
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