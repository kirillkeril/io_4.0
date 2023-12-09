<script lang="ts" setup>
import ButtonUI from '../components/ui/ButtonUI.vue';
import MessageUI from '../components/ui/MessageUI.vue';
import InlineSvg from '../components/InlineSvg.vue';
</script>

<template>
	<section class="chat">
		<header class="chat_header">
			<h1>Чат</h1>
			<ButtonUI icon="document" blue-fill>Документация</ButtonUI>
		</header>
		<main class="chat_main">
			<div class="chat_addressee">
				<img src="" alt="">
				<div class="addressee_data">
					<span class="addressee_data_name">Даниил Мальцев</span>
					<span class="addressee_data_company">ООО “СТЕНД АП ПЭНИС”</span>
				</div>
			</div>
			<div class="messages">
				<div class="messages_internal">
					<MessageUI/>
					<MessageUI/>
					<MessageUI/>
					<MessageUI/>
				</div>
				<div class="messages_external">
					<MessageUI/>
					<MessageUI/>
					<MessageUI/>
					<MessageUI/>
					<MessageUI/>
				</div>
			</div>
			<form class="form">
				<div class="form_input">
					<InlineSvg svg="clip"/>
					<input/>
					<InlineSvg svg="send"/>
				</div>
			</form>
		</main>
	</section>
</template>


<style lang="sass" scoped>
@import '../assets/sass/colors'
.addressee_data
	display: flex
	flex-direction: column
	justify-content: center
	align-items: flex-start
	&_name
		color: $dark-blue
		font-weight: 600
		font-size: 16px
		margin-bottom: 4px
	&_company
		color: $grey
		font-size: 14px
		font-style: normal
		font-weight: 400
.chat
	width: 100%
	padding: 20px 24px 24px 24px
	display: flex
	flex-direction: column
	gap: 24px
	&_header
		display: flex
		justify-content: space-between
		align-items: center
	&_main
		max-height: calc(100dvh - 220px)
		overflow-y: auto
		border-radius: 32px
		background: #fff
		height: 100%
		flex: 1
		padding: 0 36px
		display: flex
		flex-direction: column
		justify-content: space-between
	&_addressee
		display: inline-flex
		justify-content: flex-start
		gap: 12px
		top: 0
		position: sticky
		background: #fff
		width: 100%
		padding-bottom: 12px 
		padding-top: 36px
		img
			border: none
			width: 52px
			height: 52px
			border-radius: 9999px
			background-color: $grey
.messages
	flex: 1
	height: 100%
	display: flex
	flex-direction: column-reverse
	align-items: center
	&_external
		display: flex
		flex-direction: column-reverse
		width: 100%
	&_internal
		justify-self: flex-end
		display: flex
		flex-direction: column-reverse
		align-items: flex-end
		width: 100%

.form
	padding-bottom: 36px
	background: #fff
	position: sticky
	bottom: 0
	display: flex
	justify-content: center
	align-items: center
	width: 100%
	&_input
		border-radius: 10px
		padding: 12px
		width: 100%
		display: flex
		align-items: center
		background: $silver
		gap: 12px
		input
			color: $dark-blue
			font-size: 18px
			font-weight: 400 
			background: transparent
			border: none
			outline: none
			outline-color: none
			width: 100%


</style>