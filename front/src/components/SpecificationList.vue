<template>
	<div class="specification-list">
		<!-- <p class="specification-list__empty">Пока что здесь пусто...</p> -->
		<div class="specification-list__inner">
			<SpecificationItem 
				v-for="specification in specificationList" 
				:key="specification.id"
				:formProps="specification"
			/>
		</div>
		<button class="specification-list__add" @click="addNewSpecification">
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
	},
	data() {
		return {
			specificationList: [
				{
					id: 1232,
					name: '',
					okpd: '',
					price: 0,
					size: 0,
					nds: 5,
					summ: 0,
				},
			]
		}
	},
	methods: {
		addNewSpecification() {
			this.specificationList.push({
				id: 1232,
				name: '',
				okpd: '',
				price: 0,
				size: 0,
				nds: 5,
				summ: 0,
			})
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/colors'
.specification-list
	display: flex
	flex-direction: column
	align-items: center
	height: 100%

	&--empty
		justify-content: center

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

	&__inner
		width: 100%
		display: flex
		flex-direction: column
		grid-gap: 24px
</style>