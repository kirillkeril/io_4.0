<script setup lang="ts">
</script>

<template>
  <div>
    <router-link to="/">
      MainPage
    </router-link>
    <router-link to="/about">
      AboutPage
    </router-link>
    <router-link to="/ui">
      UI Page
    </router-link>
	<router-view></router-view>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  
</template>

<style scoped sass>

</style>
