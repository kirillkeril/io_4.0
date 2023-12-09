<template>
	<div class="nav-bar">
		<nav class="nav-bar__inner">
			<ul>
				<li>
					<ButtonUI 
						:active="getRouteName === 'suppliers'" 
						trans 
						link="/suppliers" 
						icon="chat"
					>Обсуждения</ButtonUI>
				</li>
				<li>
					<ButtonUI
						trans
						icon="user"
					>Поставщики</ButtonUI>
				</li>
				<li>
					<ButtonUI 
						trans 
						icon="trending-up"
					>Аналитика</ButtonUI>
				</li>
				<li>
					<ButtonUI 
						trans 
						icon="document"
					>Архив</ButtonUI>
				</li>
			</ul>
			<ButtonUI trans icon="logout">Выйти</ButtonUI>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'NavBar',

	data() {
		return {
			actualPath: '/' 
		}
	},

	computed: {
		getRouteName() {
			return this.actualPath
		}
	},

	watch: {
		$route(to, from) {
			this.actualPath = to.path.split('/')[1];
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