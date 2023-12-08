<script lang="ts" setup>
import { computed, defineAsyncComponent, defineProps } from 'vue';
interface Props {
	svg: string;
}

const {svg} = defineProps<Props>();

const dynamicComponent = computed(() => defineAsyncComponent(() => import(`../assets/svg/${svg}.svg`)));
</script>

<template>
	<component :is="dynamicComponent" />
</template>
