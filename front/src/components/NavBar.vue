<template>
	<div class="nav-bar">
		<nav class="nav-bar__inner">
			<ul>
				<li>
					<ButtonUI trans link="discussion" icon="chat">Обсуждения</ButtonUI>
				</li>
				<li>
					<ButtonUI trans link="suppliers" icon="user">Поставщики</ButtonUI>
				</li>
				<li>
					<ButtonUI trans icon="trending-up">Аналитика</ButtonUI>
				</li>
				<li>
					<ButtonUI trans icon="document">Архив</ButtonUI>
				</li>
			</ul>
			<ButtonUI trans icon="logout">Выйти</ButtonUI>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'NavBar',

	computed: {
		getRouteName() {
			console.log();
		}
	}
}
</script>

<style lang="sass" scoped>
.nav-bar
	width: 100%
	max-width: 264px
	padding: 24px 24px 24px 14px
	background: white

	&__inner
		height: 100%
		display: flex
		flex-direction: column
		justify-content: space-between

	& .btn
		padding-left: 10px
		width: 100%

	& ul
		display: flex
		flex-direction: column
		grid-gap: 16px
			
</style>