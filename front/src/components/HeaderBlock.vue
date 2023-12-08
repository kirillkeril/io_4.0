<template>
	<header class="header">
		<img src="../assets/img/logo.png" alt="logo" />
		<div class="header__profile">
			<p>Ксения Кремнева</p>
			<div class="header__profile-img">
				<img src="../assets/img/user.png" alt="profile" />
			</div>
		</div>
	</header>
</template>

<script lang="ts">
export default {
	name: 'HeaderBlock'
}
</script>

<style lang="sass" scoped>
.header
	display: flex
	justify-content: space-between
	align-items: center
	padding: 28px 24px
	background: #fff

	&__profile
		display: flex
		align-items: center
		grid-gap: 16px
		cursor: pointer
		transition: .3s opacity

		&:hover
			opacity: .8

		& p
			font-size: 16px
			font-weight: 600

	&__profile-img
		width: 52px
		aspect-ratio: 1
		position: relative
		overflow: hidden
		border-radius: 50%
		
		& img
			position: absolute
			top: 0
			left: 0
			width: 100%
			height: 100%
			object-fit: cover
</style>