<template>
	<div class="specification-list specification-list--empty">
		<p class="specification-list__empty">Пока что здесь пусто...</p>
		<button class="specification-list__add">
			<InlineSvg svg="plus" />
			<span>Добавить позицию</span>
		</button>
	</div>
</template>

<script>
import InlineSvg from '../components/InlineSvg.vue';

export default {
	name: 'SpecificationList',
	components: {
		InlineSvg
	}
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/colors'
.specification-list
	display: flex
	flex-direction: column
	height: 100%

	&--empty
		justify-content: center
		align-items: center

	&__add
		display: flex
		align-items: center
		grid-gap: 12px
		font-size: 16px
		margin-top: 25px
		cursor: pointer

		&:hover
			& svg
				transform: rotate(90deg)

			& span
				opacity: .5

		& svg
			transition: .3s all

		& span
			transition: .3s all
		
	&__empty
		font-size: 18px
		color: $grey
</style>