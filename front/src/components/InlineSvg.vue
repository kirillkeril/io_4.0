
<template>
	<component :is="component"></component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
const component = computed(() => import('../assets/svg/mail.svg'));
</script>