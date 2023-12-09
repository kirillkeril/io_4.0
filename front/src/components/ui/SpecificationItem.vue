<template>
	<div class="specification">
		<div class="specification__head">
			<div class="specification__head-main">
				<span>Ввод сведений</span>
				<p>Основная информация</p>
			</div>
			<p class="specification__head-status">Ввод сведений</p>
		</div>
		<div class="specification__body">
			<div class="specification__body-item">
				<p>Наименование</p>
				<input 
					type="text" 
					id="name" 
					name="name" 
					placeholder="Куртки мужские из кожи"
					class="input" 
					v-model="form.name"
				/>
			</div>
			<div class="specification__body-item">
				<p>ОКПД2</p>
				<input 
					type="text" 
					id="okpd" 
					name="okpd" 
					placeholder="14.11.10.112"
					class="input" 
					v-model="form.okpd"
				/>
			</div>
			<div class="specification__body-item">
				<p>Цена (с НДС)</p>
				<input 
					type="text" 
					id="price" 
					name="price" 
					placeholder="14"
					class="input" 
					v-model="form.price"
					@change="changeSumm"
				/>
			</div>
			<div class="specification__body-item">
				<p>Колл-во</p>
				<input 
					type="text" 
					id="size" 
					name="size" 
					placeholder="100000 шт."
					class="input" 
					v-model="form.size"
					@change="changeSumm"
				/>
			</div>
			<div class="specification__body-item">
				<p>НДС</p>
				<span>5%</span>
			</div>
			<div class="specification__body-item">
				<p>Сумма (с учетом НДС)</p>
				<span>{{ getSumm }} ₽</span>
			</div>
		</div>
		<div class="specification__buttons">
			<button>
				<InlineSvg svg="change" />
				<span>Редактировать</span>
			</button>
			<button>
				<InlineSvg svg="trash" />
				<span>Удалить</span>
			</button>
		</div>
		<div class="specification__comments">
			<p>Комментарий</p>
			<textarea name="comment" id="comment" placeholder="Напишите свой комментарий" class="input"></textarea>
		</div>
		<div class="specification__main-buttons">
			<ButtonUI blueTrans>Аргументировать отказ</ButtonUI>
			<ButtonUI blueFill icon="check">Принять</ButtonUI>
		</div>
	</div>	
</template>

<script lang="ts">
import InlineSvg from '../../components/InlineSvg.vue';

export default {
	name: 'SpecificationItem',
	components: {
		InlineSvg
	},
	props: {
		formProps: {
			type: Object,
			default: {}
		}
	},
	data() {
		return {
			form: {
				id: null,
				name: null,
				okpd: null,
				price: null,
				size: null,
				nds: null,
				summ: null,
			}
		}
	},
	mounted() {
		this.form = {
			id: this.formProps.id,
			name: this.formProps.name,
			okpd: this.formProps.okpd,
			price: this.formProps.price,
			size: this.formProps.size,
			nds: this.formProps.nds,
			summ: this.formProps.summ,
		}
	},
	methods: {
		changeSumm() {
			let nonNds = this.form.price * this.form.size;
	
			this.form.summ = nonNds * 105 / 100;
		}
	},
	computed: {
		getSumm() {
			return this.form.summ;
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/sass/colors'
.specification
	display: flex
	flex-direction: column
	grid-gap: 24px
	background: $white
	padding: 24px
	border-radius: 10px
	animation-name: specification
	animation-fill-mode: forwards
	animation-duration: .5s
	animation-delay: .2
	transform: translateY(50%)
	opacity: 0

	@keyframes specification 
		100%
			transform: translateY(0)
			opacity: 1

	&__head
		display: flex
		justify-content: space-between
		align-items: center

	&__head-main
		display: flex
		align-items: center
		grid-gap: 16px
		font-size: 18px
		font-weight: 600

		& span
			color: $grey

	&__head-status
		padding: 4px 12px
		background: $peach
		border-radius: 1000px
		color: white
		line-height: 1.5

	&__body
		display: flex
		grid-gap: 26px

	&__body-item
		display: flex
		flex-direction: column
		justify-content: space-between
		grid-gap: 12px

		&:nth-child(1)
			width: 33%

		&:last-child
			width: 190px

		& p
			font-size: 14px

		& span
			font-size: 14px
			font-weight: 600
			transform: translateY(-50%)

	&__buttons
		display: flex
		justify-content: flex-end
		grid-gap: 24px

		& button
			display: flex
			align-items: center
			grid-gap: 12px
			cursor: pointer
			transition: .3s opacity

			&:hover
				opacity: .5

	&__comments
		margin-top: 24px
		
		& p
			margin-bottom: 11px
			font-size: 18px
			font-weight: 600
			color: $blue
			line-height: 1.3

		& textarea
			resize: none 
			height: 80px
			font-family: inherit

	&__main-buttons
		display: flex
		justify-content: space-between
</style>