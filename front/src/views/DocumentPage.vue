<template>
	<section class="document">
		<div class="document__head">
			<router-link to="/suppliers/discussion" class="document__title">
				<InlineSvg svg="arrow-left" />
				<h1>Документация</h1>
			</router-link>
			<ButtonUI green icon="check" @click="sendNewVersion">Отправить на рассмотрение
			</ButtonUI>
		</div>
		<div class="document__body">
			<DocumentBody />
		</div>
		<!-- link="/suppliers/discussion/document/specification" -->
	</section>
</template>

<script lang="ts">
import InlineSvg from '../components/InlineSvg.vue';
import DocumentBody from '../components/DocumentBody.vue';
import {useDocumentsStore} from '../stores/document';

export default {
	name: 'DocumentPage',
	setup() {
		const { sendNewVersion } = useDocumentsStore();

		return { sendNewVersion };
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