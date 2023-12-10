<template>
	<div class="specification">
		<div class="specification__title">
			<div class="specification__title-backe">
				<InlineSvg svg="arrow-left" />
				<router-link to="/suppliers/discussion/document">
					<h1>Документация</h1>
				</router-link>
			</div>
			<ButtonUI blueFill @click="firstStep = false">Отправить на рассмотрение</ButtonUI>
		</div>
		<div class="specification__body" v-if="getFirstStep">
			<div class="specification__body-title">
				<h2>Спецификация</h2>
				<div class="specification__head-items">
					<router-link to="/">
						<div>
							<InlineSvg svg="light" />
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
		<div class="specification__body" v-else>
			<div class="specification__body-title">
				<h2>Сведения о поставке</h2>
			</div>
			<div class="specification__main">
				<div class="card">
					<h3>Основная информация</h3>
					<div class="card__list">
						<div class="card__info">
							<p>Фактический адрес</p>
							<span>614077, г. Пермь, Бульвар Гагарина, 68</span>
						</div>
						<div class="card__info">
							<p>Срок поставки</p>
							<span>До 04.01.2024</span>
						</div>
						<div class="card__info">
							<p>Наименование</p>
							<span>Куртки мужские из кожи</span>
						</div>
						<div class="card__info">
							<p>Цена (с НДС)</p>
							<span>14 ₽</span>
						</div>
						<div class="card__info">
							<p>Кол-во</p>
							<span>100000 шт.</span>
						</div>
						<div class="card__info">
							<p>Сумма (с учетом НДС)</p>
							<span>1.400.000 ₽</span>
						</div>
					</div>
				</div>
				<ButtonUI blue-fill>Открыть PDF</ButtonUI>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import InlineSvg from '../components/InlineSvg.vue';
import SpecificationList from '../components/SpecificationList.vue';

export default {
	name: 'SpecificationPage',
	data() {
		return {
			firstStep: true,
		}
	},
	computed: {
		getFirstStep() {
			return this.firstStep;
		}
	},
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

	.card
		background: #F6F8FF
		border-radius: 10px
		padding: 24px 
		margin-bottom: 24px
		
		&__list
			margin-top: 24px
			display: grid
			grid-template-columns: 1fr 1fr 1fr 1fr
			grid-template-rows: 1fr 1fr
			grid-gap: 16px

		&__info
			display: flex
			flex-direction: column
			grid-gap: 12px

			& p
				font-size: 14px

			& span
				font-size: 14px
				font-weight: 600
				color: #8892A7

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
		