<template>
  <span class="badge">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
name: 'BadgeUI'
interface Props {
  text: string;
  color: string;
}
const {text, color} = defineProps<Props>();
</script>

<style lang="sass" scoped>
.badge
  border-radius: 1000px
  padding: 4px 12px
  background: v-bind(color)
  color: #FFF
  font-size: 12px
  font-weight: 400
  line-height: 18px
</style>