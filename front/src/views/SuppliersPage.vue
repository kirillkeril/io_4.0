<template>
	<section class="suppliers">
		<div class="suppliers__title">
			<h1>Обсуждение</h1>
		</div>
		<div class="suppliers__body">
			<DiscussionTable v-if="providers" :providers="providers"/>
		</div>
		
	</section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import { useProvidersStore } from '../stores/providers'
import { useDiscussionStore } from '../stores/discussion'

import DiscussionTable from '../components/DiscussionTable.vue'

import { User } from '../types/user'
import { Document } from '../types/document'

import { computed, onMounted, Ref, ref } from 'vue'

const users: Ref<User[]> = ref([]);
const discussion: Ref<Document[]> = ref([]);

const { fetchAllProviders } = useProvidersStore();
const { fetchAllDiscussions } = useDiscussionStore();

const { allProviders } = storeToRefs(useProvidersStore());
const { allDiscussion } = storeToRefs(useDiscussionStore());

onMounted(() => {
	fetchAllProviders();
	fetchAllDiscussions();
});

const providers = computed(() => {
	return allProviders.value?.filter(item => item.role === 'provider');
});
</script>

<style lang="sass" scoped>
.suppliers
	width: 100%
	padding: 20px 24px 24px 24px
	display: flex
	flex-direction: column
	grid-gap: 24px

	&__title
		& h1
			font-size: 36px

	&__body
		width: 100%
		flex: 1
		background: #fff
		border-radius: 32px
		max-height: calc(100vh - 210px)
		overflow-y: auto
</style>