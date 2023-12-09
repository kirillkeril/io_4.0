<template>
	<div class="table">
		<div class="table__head">
			<div class="table__head-item">
				<p>Поставщик</p>
			</div>
			<div class="table__head-item">
				<SelectUI placeholder="Предмет договора" name="alphobet" :inputs="[
					{
						id: 'i1',
						value: 'От А до Я',
					},
					{
						id: 'i2',
						value: 'От Я до А',
					}
				]" />
			</div>
			<div class="table__head-item">
				<SelectUI placeholder="Статус" name="status" :inputs="[
					{
						id: 's1',
						value: 'Ввод сведений',
					},
					{
						id: 's2',
						value: 'Отказано',
					},
					{
						id: 's3',
						value: 'Подписано',
					}
				]" />
			</div>
			<div class="table__head-item">
				<p>От</p>
			</div>
			<div class="table__head-item">
				<p>До</p>
			</div>
		</div>
		<div class="table__list">
			<DiscussionUI v-for="(p) in providers" :key="p.email" :provider="p"/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { User } from "../types/user";
import DiscussionUI from "./ui/DiscussionUI.vue";

interface Props {
	providers: User[]
}
const { providers } = defineProps<Props>();
</script>

<style lang="sass" scoped>
.table
	&__head
		display: grid
		grid-template-columns: minmax(203px, 220px) 164px 1fr 1fr 1fr 64px
		grid-gap: 50px
		position: sticky
		top: 0
		background: #fff
		padding: 33px 36px
		z-index: 1

	&__head-item
		// text-align: center

		// &:first-child
		// 	text-align: left

		// &:last-child
		// 	text-align: right

	&__list
		display: flex
		flex-direction: column
		grid-gap: 24px
		padding: 33px 36px
		padding-top: 0
</style>