<template>
	<section class="ui">
		<p>Заголвок 700</p>
		<p>Заголвок 600</p>
		<p>Заголвок 500</p>
		<p>Заголвок 400</p>
	</section>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
.ui
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