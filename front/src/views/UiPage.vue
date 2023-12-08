<template>
	<section class="ui">
		<p>Текс 700</p>
		<p>Текс 600</p>
		<p>Текс 500</p>
		<p>Текс 400</p>
		<ButtonUI>Кнопка</ButtonUI>
		<ButtonUI link="/about">Ссылка</ButtonUI>
	</section>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
.ui
	display: flex
	flex-direction: column
	align-items: center

	& p
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