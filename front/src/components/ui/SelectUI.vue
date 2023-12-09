<template>
	<div class="select">
		<button class="select__title" @click="toggleSelect">
			<p>{{ getValue ? getValue : placeholder }}</p>
			<IconUI svg="small-arrow"/>
		</button>
		<div :class="['select__list', {
			'is-open': getState
		}]">
			<div 
				v-for="input in inputs" 
				:key="input.id" 
				class="select__list-item"
			>
				<input type="radio" :id="input.id" :name="name" @change="changeInput(input.value)" />
				<label :for="input.id" @click="toggleSelect">{{ input.value }}</label>
			</div>
		</div>
	</div>
</template>

<script lang="js">
export default {
	props: {
		placeholder: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		inputs: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			isOpen: false,
			value: null
		}
	},
	methods: {
		toggleSelect() {
			this.isOpen = !this.isOpen;
		},
		changeInput(newValue) {
			this.value = newValue
		}
	},
	computed: {
		getState() {
			return this.isOpen;
		},
		getValue() {
			return this.value;
		}
	},
	name: 'SelectUI'
}
</script>

<style lang="sass" scoped>
@import '../../assets/sass/colors'
.select
	position: relative

	&__title
		display: flex
		align-items: center
		grid-gap: 14px
		cursor: pointer

	&__list
		width: 100%
		position: absolute
		bottom: -16px
		left: 0
		transform: translateY(100%)
		display: none
		flex-direction: column
		border-radius: 10px
		background: $silver
		overflow: hidden

		&.is-open
			display: flex

	&__list-item
		& input
			display: none

		& label
			display: block
			font-size: 12px
			padding: 12px
			padding-bottom: 0
			cursor: pointer
			transition: .3s all

			&:hover
				background: #F6F8FF

			&:last-child
				padding-bottom: 12px
</style>