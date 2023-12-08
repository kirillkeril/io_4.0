<<<<<<< HEAD
<script lang="ts">
import { defineAsyncComponent } from 'vue';
=======
<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue';
interface Props {
	svg: string;
}
>>>>>>> 2f786b159b5c79560e5c248cc5fb9694800ab82b

const {svg} = defineProps<Props>();

const dynamicComponent = computed(() => defineAsyncComponent(() => import(`../assets/svg/${svg}.svg`)));
</script>

<template>
	<component :is="dynamicComponent" />
</template>
