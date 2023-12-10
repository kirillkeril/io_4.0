<template>
	<div class="document-about">
		<DocumentAboutUI  
			v-for="user in filteredUsers" 
			:key="user._id" 
			:customer="user.role == 'customer'"
			:dataUser="user"
		/>
	</div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { useProvidersStore } from '../stores/providers';

export default {
	setup() {
		const { allProviders } = storeToRefs(useProvidersStore());
		
		return { allProviders }
	},
	computed: {
		filteredUsers() {
			let local = JSON.parse(localStorage.getItem('currentIdenty'));
			console.log(local);

			return this.allProviders?.filter(user =>  {
				return user._id == local.providerId || user._id == local.customerId
			})
		}
	},
	name: 'DocumentAbout'
}
</script>

<style lang="sass" scoped>
.document-about
	margin-top: 24px
	display: flex
	grid-gap: 24px
</style>