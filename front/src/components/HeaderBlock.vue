<template>
	<header class="header">
		<img src="../assets/img/logo.png" alt="logo" class="header__logo" />
		<div class="header__profile">
			<p>{{ user?.fullname }}</p>
			<div class="header__profile-img">
				<img src="../assets/img/user.png" alt="profile" />
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/users";

const {user} = storeToRefs(useUserStore());
</script>

<style lang="sass" scoped>
.header
	display: flex
	justify-content: space-between
	align-items: center
	padding: 28px 24px
	background: #fff

	&__logo
		width: 168px

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
		width: 42px
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