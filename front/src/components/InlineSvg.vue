<script setup lang="ts">
interface Props {
	svg: string;
}

const {svg} = defineProps<Props>();
</script>

<template>
	<img :src="`/svg/${svg}.svg`">
</template>