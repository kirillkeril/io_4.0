<template>
	<section class="ui">
		<p>Текс 700</p>
		<p>Текс 600</p>
		<p>Текс 500</p>
		<p>Текс 400</p>
		<ButtonUI>Кнопка</ButtonUI>
		<ButtonUI link="/about">Ссылка</ButtonUI>
		<InlineSvg name="mail"/>
	</section>
</template>

<script setup lang="ts">
import InlineSvg from '../components/InlineSvg.vue';
</script>

<style scoped lang="sass">
@import '../assets/sass/colors'
.ui
	display: flex
	flex-direction: column
	align-items: center

	& p
		color: $blue
		&:nth-child(1)
			font-weight: 700
			font-size: 60px
		&:nth-child(2)
			font-weight: 600
			font-size: 50px
		&:nth-child(3)
			font-weight: 500
			font-size: 40px
		&:nth-child(4)
			font-weight: 400
			font-size: 30px
</style>