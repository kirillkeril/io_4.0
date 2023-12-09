<template>
	<div class="about-ui">
		<div class="about-ui__title">
			<p>О заказчике</p>
			<span>ГБУЗ «КМСЧ № 1»</span>
		</div>
		<div class="about-ui__podpis" v-if="customer">
			<button class="document-main__item-change">
				<InlineSvg svg="change" />
			</button>
			<p>Подписант*</p>
			<input 
				type="text" 
				id="podpis" 
				name="podpis" 
				placeholder="Лукьянов Михаил Владимирович (Генеральный директор)"
				class="input" 
			>
		</div>
		<div class="about-ui__tabs">
			<div class="about-ui__tabs-buttons">
				<button :class="{'is-active': getActiveTab === 'all'}" @click="setACtiveTab('all')">Общее</button>
				<button :class="{'is-active': getActiveTab === 'requisites'}" @click="setACtiveTab('requisites')">Реквизиты</button>
				<button :class="{'is-active': getActiveTab === 'contacts'}" @click="setACtiveTab('contacts')">Контакты</button>
			</div>
			<div class="about-ui__tabs-tab about-ui__tabs-tab--all" v-if="getActiveTab === 'all'">
				<div class="about-ui__tabs-item">
					<p>Фактический адрес</p>
					<span>614077, г. Пермь, Бульвар Гагарина, 68</span>
				</div>
				<div class="about-ui__tabs-item">
					<p>ИНН</p>
					<span>0000000000</span>
				</div>
				<div class="about-ui__tabs-item">
					<p>ОГРН</p>
					<span>0000000000000</span>
				</div>
				<div class="about-ui__tabs-item">
					<p>КПП</p>
					<span>000000000</span>
				</div>
			</div>
			<div class="about-ui__tabs-tab about-ui__tabs-tab--requisites" v-if="getActiveTab === 'requisites'">
				<div class="about-ui__tabs-item">
					<p>Наименование банка</p>
					<span>ПАО «СберБанк»</span>
				</div>
				<div class="about-ui__tabs-item">
					<p>Рассчетный счет</p>
					<span>03224643570000005600</span>
				</div>
				<div class="about-ui__tabs-item">
					<p>БИК</p>
					<span>015773997</span>
				</div>
			</div>
			<div class="about-ui__tabs-tab about-ui__tabs-tab--contacts" v-if="getActiveTab === 'contacts'">
				<div class="about-ui__tabs-item">
					<p>Номер телефона</p>
					<span>(342) 205-58-68</span>
				</div>
				<div class="about-ui__tabs-item">
					<p>Email</p>
					<span>Kmsch1zakup@mail.ru</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import InlineSvg from '../InlineSvg.vue';

export default {
	name: 'DocumentAboutUI',
	props: {
		customer: {
			type: Boolean,
			default: false
		}
	},
	components: {
		InlineSvg
	},
	data() {
		return {
			activeTab: 'all'
		}
	},
	methods: {
		setACtiveTab(newTab) {
			this.activeTab = newTab;
		}
	},
	computed: {
		getActiveTab() {
			return this.activeTab;
		}
	},
}
</script>

<style lang="sass" scoped>
@import '../../assets/sass/colors'
.about-ui
	width: 50%
	background: $white
	padding: 24px
	border-radius: 10px

	&__title
		display: flex
		justify-content: space-between
		align-items: center

		& p
			font-size: 18px
			font-weight: 600

		& span
			font-size: 14px
			font-weight: 600
			color: $blue

	&__podpis
		position: relative
		margin-top: 24px
		display: flex
		flex-direction: column
		grid-gap: 12px

		&:hover
			.document-main__item-change
				opacity: 1

		& p
			font-size: 14

		.document-main__item-change
			position: absolute
			top: 0
			right: 0
			opacity: 0
			transition: .3s opacity
			cursor: pointer

			&:hover
				opacity: .5 !important

	&__tabs
		margin-top: 24px

	&__tabs-buttons
		display: flex
		align-items: flex-start
		margin-bottom: 24px

		& button
			width: 33.3%
			padding-bottom: 8px
			font-size: 16px
			font-weight: 600
			border-bottom: 2px solid rgba($blue, 0)
			cursor: pointer
			transition: .3s all

			&:hover
				border-bottom: 2px solid rgba($blue, .4)

			&.is-active
				border-bottom: 2px solid $blue

	&__tabs-item
		display: flex
		flex-direction: column
		grid-gap: 12px
		font-size: 14px

		& p

		& span
			font-size: 600
			color: $grey

	&__tabs-tab
		&--all
			display: flex
			flex-wrap: wrap
			grid-column-gap: 40px
			justify-content: space-between
			grid-row-gap: 16px

			& .about-ui__tabs-item
				&:first-child
					width: 100%

		&--requisites
			display: flex
			flex-wrap: wrap
			grid-column-gap: 40px
			grid-row-gap: 16px

			& .about-ui__tabs-item
				&:first-child
					width: 100%

		&--contacts
			display: flex
			grid-column-gap: 40px
			flex-wrap: wrap
			grid-row-gap: 16px

</style>