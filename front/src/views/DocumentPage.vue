<template>
	<section class="document">
		<div class="document__head">
			<router-link to="/suppliers/discussion" class="document__title">
				<InlineSvg svg="arrow-left" />
				<h1>Документация</h1>
			</router-link>
			<ButtonUI green icon="check" @click="sendNewVersion">Согласовать
			</ButtonUI>
			<ButtonUI blueFill @click="isOpen = true">
				Отправить на рассмотрение
			</ButtonUI>
		</div>
		<div class="document__body">
			<DocumentBody />
		</div>
		<div class="document__modal" v-if="getIsOpen">
			<div class="document__modal-inner">
				<div class="document__modal-title">
					<p><span>Аргументируйте</span> изменения документа</p>
					<InlineSvg svg="cross" @click="isOpen = false"/>
				</div>
				<textarea class="input" placeholder="Ваше сообщение..." v-model="message"></textarea>
				<ButtonUI blueFill @click="compliteMessage">Готово</ButtonUI>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import InlineSvg from '../components/InlineSvg.vue';
import DocumentBody from '../components/DocumentBody.vue';
import {states, useDocumentsStore} from '../stores/document';
import { storeToRefs } from 'pinia';

export default {
	name: 'DocumentPage',
	setup() {
		const { sendNewVersion } = useDocumentsStore();
		const { setMessage } = useDocumentsStore();
		const { state } = storeToRefs(useDocumentsStore());

		return { sendNewVersion, setMessage, states, state };
	},
	data() {
		return {
			isOpen: false,
			message: '',
		}
	},
	methods: {
		compliteMessage() {
			this.setMessage(this.message);
			this.isOpen = false;

			this.$router.push({ path: '/suppliers/discussion/document/changes' })
		}
	},
	computed: {
		getIsOpen() {
			return this.isOpen;
		}
	},
	components: {
		InlineSvg,
		DocumentBody
	}
}
</script>

<style lang="sass" scoped>
.document
	padding: 24px
	width: 100%

	&__modal
		display: flex
		justify-content: center
		align-items: center
		position: fixed
		top: 0
		left: 0
		width: 100vw
		height: 100vh
		background: rgba(#8892A7, .2)
		z-index: 4

	&__modal-inner
		padding: 36px
		border-radius: 10px
		background: #fff
		display: flex
		flex-direction: column
		align-items: flex-start
		grid-gap: 16px

		& .btn
			padding-left: 86px
			padding-right: 86px

		.input
			width: 535px
			height: 100px
			resize: none
			font-family: inherit
			font-size: 14px

	&__modal-title
		width: 100%
		display: flex
		align-items: center
		justify-content: space-between

		& p
			font-size: 18px
			font-weight: 600

			& span
				color: #3366FF

		& svg
			cursor: pointer
			transition: .3s all
			&:hover
				opacity: .5

	&__head
		width: 100%
		display: flex
		justify-content: space-between

		& .btn
			padding-left: 17px
			padding-right: 17px

	&__title
		display: flex
		align-items: center
		grid-gap: 12px

		& h1
			font-size: 32px

	&__body
		margin-top: 24px
		background: #fff
		border-radius: 32px
		padding: 36px 36px 24px
		min-height: 100%
</style>