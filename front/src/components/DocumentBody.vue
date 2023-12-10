<template>
	<div class="document-body">
		<div class="document-body__head">
			<h2>Договор №ПРМ-0845/1123</h2>
			<div class="document-body__head-items">
				<p>Последнее изменение: {{ parseDate }}</p>
				<router-link to="/suppliers/discussion/document/changes">
					<div>
						<InlineSvg svg="light"/>
						<span>{{ allVersions?.length }}</span>
					</div>
					<p>изменения</p>
				</router-link>
			</div>
		</div>
		<DocumentMain />
		<DocumentAbout />
	</div>
</template>

<script>
import InlineSvg from '../components/InlineSvg.vue';
import DocumentMain from '../components/DocumentMain.vue';
import DocumentAbout from '../components/DocumentAbout.vue';
import { useDocumentsStore } from '../stores/document';
import { storeToRefs } from 'pinia';

export default {
	setup() {
		const { allVersions } = storeToRefs(useDocumentsStore());
		const lastVersionData = useDocumentsStore();
		
		return { allVersions, lastVersionData }
	},
	name: 'DocumentBody',
	computed: {
		parseDate() {
			let dateObj = new Date();

			let month = dateObj.getUTCMonth() + 1;
			month = String(month).length == 1 ? `0${month}` : month;

			let day = dateObj.getUTCDate();
			day = String(day).length == 1 ? `0${day}` : day;

			let year = dateObj.getUTCFullYear();

			return day + "." + month + "." + year;
		}
	},
	components: {
		InlineSvg, 
		DocumentMain,
		DocumentAbout
	}
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/colors'
.document-body
	&__head
		display: flex
		justify-content: space-between
		align-items: center

		& h2
			font-size: 23px

	&__head-items
		display: flex
		align-items: center
		grid-gap: 24px

		& p
			font-size: 16px
			color: $grey

		& a
			display: flex
			align-items: center
			grid-gap: 8px
			transition: .3s opacity

			&:hover
				opacity: .5

			& div
				display: flex
				align-items: center
				grid-gap: 4px
				font-size: 16px
				font-weight: 600
				color: $blue

			& p
				font-size: 14px
</style>