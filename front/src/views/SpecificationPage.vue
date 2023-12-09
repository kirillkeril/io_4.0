<template>
	<div class="specification">
		<div class="specification__title">
			<div class="specification__title-backe">
				<InlineSvg svg="arrow-left"/>
				<router-link to="/suppliers/discussion/document">
					<h1>Документация</h1>
				</router-link>
			</div>
			<ButtonUI blueFill>Отправить на рассмотрение</ButtonUI>
		</div>
		<div class="specification__body">
			<div class="specification__body-title">
				<h2>Спецификация</h2>
				<div class="specification__head-items">
					<router-link to="/">
						<div>
							<InlineSvg svg="light"/>
							<span>0</span>
						</div>
						<p>изменения</p>
					</router-link>
				</div>
			</div>
			<div class="specification__main">
				<SpecificationList />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import InlineSvg from '../components/InlineSvg.vue';
import SpecificationList from '../components/SpecificationList.vue';

export default {
	name: 'SpecificationPage',
	components: {
		InlineSvg,
		SpecificationList
	}
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/colors'
.specification
	padding: 24px
	width: 100%

	&__title
		display: flex
		align-items: center
		justify-content: space-between

	&__title-backe
		display: flex
		align-items: center
		grid-gap: 12px

	&__body
		margin-top: 24px
		padding: 36px
		background: #fff
		border-radius: 10px
		width: 100%
		max-height: calc(100vh - 210px)
		height: 100%
		overflow-y: auto
		display: flex
		flex-direction: column
		grid-gap: 23px

		& h2
			font-size: 24px
			font-weight: 700

	&__body-title
		display: flex
		justify-content: space-between
		align-items: center

	&__head-items
		display: flex
		align-items: center
		grid-gap: 24px

		& p
			font-size: 16px
			color: $grey

		& a
			display: flex
			align-items: center
			grid-gap: 8px
			transition: .3s opacity

			&:hover
				opacity: .5

			& div
				display: flex
				align-items: center
				grid-gap: 4px
				font-size: 16px
				font-weight: 600
				color: $blue

			& p
				font-size: 14px

	&__main
		flex: 1
</style>