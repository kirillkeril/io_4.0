<template>
	<router-link 
		v-if="link.length > 0" 
		:to="link"
		:class="['btn', {
			'btn--blue-trans': blueTrans,
			'btn--blue-fill': blueFill,
			'btn--trans': trans
		}]"
	>
		<IconUI v-if="icon.length > 0" :svg="icon" class="btn__icon"/>
		<slot></slot>
	</router-link>

	<button 
		v-else 
		:class="['btn', {
			'btn--blue-trans': blueTrans,
			'btn--blue-fill': blueFill,
			'btn--trans': trans
		}]"
	>
		<IconUI v-if="icon.length > 0" :svg="icon" class="btn__icon"/>
		<slot></slot>
	</button>
</template>

<script lang="ts">
export default {
	props: {
		link: {
			type: String,
			default: '',
		},
		blueTrans: {
			type: Boolean,
			default: false
		},
		blueFill: {
			type: Boolean,
			default: false
		},
		trans: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String,
			default: ''
		}
	},
	name: 'ButtonUI'
}
</script>

<style lang="sass">
@import '../../assets/sass/colors'
.btn
	border-radius: 10px
	padding: 10px 46px

	display: flex
	align-items: center
	grid-gap: 8px

	font-size: 16px
	font-weight: 600
	line-height: 1.5
	cursor: pointer
	transition: .3s all

	&--blue-trans
		border: 1px solid $blue
		background: transparent
		color: $blue

		&:hover
			border: 1px solid #0036D8
			color: #0036D8

			.btn__icon
				& path
					fill: #0036D8

		&:active
			transform: scale(.95)

		.btn__icon
			& path
				fill: $blue

	&--blue-fill
		background: $blue
		color: $white

		&:hover
			background: #0036D8

		&:active
			transform: scale(.95)

		.btn__icon
			& path
				fill: $white

	&--trans
		color: #A1A6B4

		&:hover
			background: $silver

		&:active
			transform: scale(.95)

		.btn__icon
			& path
				fill: #A1A6B4

	&__icon
		// width: 24px
		// height: 24px

		& path
			transition: .3s all
</style>