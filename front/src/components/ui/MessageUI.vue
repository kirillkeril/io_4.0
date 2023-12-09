<template>
  <div class="message">
    <div class="message_avatar">
      <img src="" alt="">
    </div>
    <div class="message_content">
      <span class="message_author">Даниил Мальцев</span>
      <div class="message_content">
        Приветствую, хотел бы уточнить некоторую информацию по документу в неформальном стиле.
        Удобно ли будет созвониться завтра, допустим, часов в 12?
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
@import '../../assets/sass/colors'
.message
  display: grid
  max-width: 516px
  min-width: 150px
  grid-template-areas: "avatar author" "avatar content" "avatar applications"
  gap: 12px
  &_avatar
    width: 52px
    height: 52px
    border-radius: 9999px
    border: none
    background: $grey
    grid-area: avatar
    img 
      border-radius: 9999px
      border: none
      width: 100%
      height: 100%
  &_author
    font-family: $dark-blue
    font-size: 16px
    font-weight: 600
  &_content
    color: $dark-blue
    font-family: Inter
    font-size: 14px
    font-style: normal
    font-weight: 400
    line-height: 20px
</style>