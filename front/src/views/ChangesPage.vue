<template>
  <section class="changes">
    <header class="changes_header">
      <h1>Изменения</h1>
    </header>
    <main class="changes_main">
      <div class="for_review">
        <h2>К рассмотрению</h2>
        <div class="for-review_items">
          <ReviewItem />
        </div>
      </div>
      <div class="changes_archive">
        <h2>Архив изменений</h2>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import ReviewItem from "../components/ReviewItem.vue";
</script>

<style scoped lang="sass">
@import '../assets/sass/colors'
.changes
  width: 100%
  padding: 20px 24px 24px 24px
  display: flex
  flex-direction: column
  gap: 24px

  &_header
    display: flex
    justify-content: space-between
    align-items: center

    h1
      font-size: 36px
  &_main
    max-height: calc(100dvh - 220px)
    border-radius: 32px
    background: #fff
    height: 100%
    flex: 1
    padding: 36px
    display: flex
    flex-direction: column

    h2
      color: $dark-blue
      font-size: 24px
      font-style: normal
      font-weight: 700
      line-height: 32px
  
</style>