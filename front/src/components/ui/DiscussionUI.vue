<template>
	<div class="discussion">
		<div class="discussion__item discussion__hero">
			<div class="discussion__hero-img">
				<img src="../../assets/img/user.png" alt="user" />
			</div>
			<div class="discussion__hero-info">
				<p>{{ provider.fullname }}</p>
				<span>{{ provider.companyName }}</span>
			</div>
		</div>
		<div class="discussion__item discussion__decs">
			<p>Провод монтажный витой...</p>
		</div>
		<div class="discussion__item discussion__status">
			<p>Ввод сведений</p>
		</div>
		<div class="discussion__item discussion__date">
			<p>24.12.2023</p>
		</div>
		<div class="discussion__item discussion__date">
			<p>04.01.2024</p>
		</div>
		<div class="discussion__item discussion__more">
			<ButtonUI style="padding: 0" @click="() => startDiscussion(provider._id)">
				<IconUI svg="chat" class="chat" />
			</ButtonUI>
			<button>
				<IconUI svg="dots" />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { User } from "../../types/user";
import { useDiscussionStore } from "../../stores/discussion";

interface Props {
	provider: User;
}
const { provider } = defineProps<Props>();
const { startDiscussion } = useDiscussionStore();
</script>

<style lang="sass" scoped>
@import '../../assets/sass/colors'
.discussion
	display: grid
	align-items: center
	grid-template-columns: minmax(203px, 220px) 164px 1fr 1fr 1fr 64px
	grid-gap: 50px

	&__item
		// text-align: center

		// &:first-child
		// 	text-align: left

		// &:last-child
		// 	text-align: right

	&__hero
		display: flex
		align-items: center
		grid-gap: 12px

	&__hero-img
		position: relative
		overflow: hidden
		min-width: 42px
		aspect-ratio: 1

		& img
			position: absolute
			top: 0
			left: 0
			width: 100%
			height: 100%
			object-fit: cover

	&__hero-info
		display: flex
		flex-direction: column
		grid-gap: 4px

		& p
			font-size: 14px
			font-weight: 600
			color: $dark-blue

		& span
			font-size: 12px
			color: $grey

	&__decs
		& p
			font-size: 12px
			color: $grey

	&__status
		& p
			font-size: 12px
			display: inline
			padding: 4px 12px
			border-radius: 1000px
			background: $peach
			white-space: nowrap
			color: white

	&__date
		font-size: 12px
		color: $grey

	&__more
		display: flex
		align-items: center
		grid-gap: 12px

		& button
			cursor: pointer
			transition: .3s opacity

			&:hover
				opacity: .5

		.chat:deep
			& path
				fill: $blue
</style>