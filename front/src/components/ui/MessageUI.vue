<template>
  <div class="message">
    <div class="message_avatar">
      <img v-if="!withoutIcon" src="" alt="">
    </div>
    <div class="message_content">
      <span v-if="!headless" class="message_author">{{message.authorId}}</span>
      <div class="message_content">
        {{ message.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Message } from '../../types/message';

interface Props {
  headless?: boolean;
  withoutIcon?: boolean;
  message: Message;
}

const {message} = defineProps<Props>();
</script>

<style scoped lang="sass">
@import '../../assets/sass/colors'
.message
  display: grid
  width: 516px
  text-align: left
  grid-template-areas: "avatar author" "avatar content" "avatar applications"
  grid-template-columns: 54px auto
  gap: 12px
  &_avatar
    grid-area: avatar
    img
      background: $grey
      border: none
      width: 52px
      height: 52px
      border-radius: 9999px
  &_author
    font-family: $dark-blue
    font-size: 16px
    font-weight: 600
  &_content
    text-align: left
    color: $dark-blue
    font-family: Inter
    font-size: 14px
    font-style: normal
    font-weight: 400
    line-height: 20px
</style>