<template>
  <div class="review">
    <div class="review_info" @click.prevent="() => isOpen = !isOpen">
      <div class="review_info_data">
        <span class="review_info_time">
          От 24.12.2023
          <span class="review_info_deadline">(осталось 2 рабочих дня)</span>
        </span>
        <BadgeUI text="От заказчика" color="#36f" />
        <BadgeUI text="На рассмотрении" color="#FF8761" />
      </div>
      <InlineSvg svg="chevron-down" :class="`icon icon${isOpen ? '_active' : ''}`" />
    </div>

    <div v-if="isOpen" :class="`review_main ${isOpen ? '' : 'review_main_disabled'}`">
      <div class="review_main_before">
        <h3><span>Ранняя</span>версия</h3>
        <div class="review_main_changes">
          <label for="name" class="review_main_field">
            <span>Предмет контракта</span>
            <textarea name="name" placeholder="Провод монтажный витой Мезонин 2х1,5 мм в декоративной оплетке для отрытой проводки"/>
          </label>
          <label for="name" class="review_main_field">
            <span>Место заключения</span>
            <textarea name="name" placeholder="Очко динозавтра"/>
          </label>
        </div>
      </div>
      <div class="review_main_after">
        <h3><span>Измененная</span>версия</h3>
        <div class="review_main_changes">
          <label for="name" class="review_main_field">
            <span>Предмет контракта</span>
            <textarea name="name" placeholder="Провод монтажный витой Мезонин 2х1,5 мм в декоративной оплетке для отрытой проводки" />
          </label>
          <label for="name" class="review_main_field">
            <span>Место заключения</span>
            <textarea name="name" placeholder="Очко динозавтра"/>
          </label>
        </div>
      </div>
      <footer class="review_main_footer">
        <textarea class="comment" value="'Цена единицы дополнительно поставляемого Товара или цена единицы Товара при уменьшении предусмотренного Договором количества поставляемого Товара должна определяться как частное от деления первоначальной цены Договора на предусмотренное в Договоре количество Товара'"/>
        <div class="buttons">
          <ButtonUI blue-trans >Аргументировать отказ</ButtonUI>
          <ButtonUI blue-fill icon="check">Принять</ButtonUI>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import BadgeUI from './ui/BadgeUI.vue';
import InlineSvg from './InlineSvg.vue';
import ButtonUI from './ui/ButtonUI.vue';
import { Ref, ref } from 'vue';

const isOpen: Ref<boolean> = ref(false);
</script>

<style lang="sass" scoped>
@import '../assets/sass/colors'
.review_main
  transition: transform 0.4s opacity 0.2s
  margin-top: 24px
  min-height: 50px
  min-width: 100%
  display: grid
  gap: 24px
  grid-template-areas: "before after" "footer footer"

  &_before
    grid-area: before
    display: flex
    flex-direction: column
    gap: 24px
    h3
      color: $dark-blue
      font-size: 18px
      font-weight: 600
      line-height: 24px
      letter-spacing: -0.36px
      span
        color: $blue
        margin-right: 4px
  &_after
    grid-area: after
    display: flex
    flex-direction: column
    gap: 24px
    h3
      color: $dark-blue
      font-size: 18px
      font-weight: 600
      line-height: 24px
      letter-spacing: -0.36px
      span
        color: $blue
        margin-right: 4px
  &_field
    display: flex
    flex-direction: column
    gap: 12px
  textarea
    border-radius: 10px
    resize: none
    overflow: auto
    height: 56px
    padding: 8px
    background: $silver
    border: none
    outline: none
    color: $grey
    font-size: 14px
    font-weight: 400
    line-height: 20px
  &_changes
    display: flex
    flex-direction: column
    gap: 16px
  &_footer
    grid-area: footer
    display: flex
    flex-direction: column
    gap: 26px
    textarea
      height: 78px
      resize: none 
      width: 100%
    .buttons
      display: flex
      justify-content: space-between
    
.icon
  justify-self: flex-end
  transition: all 500ms
.icon_active
  transform: rotate(90deg)
.review
  position: relative
  padding: 24px
  background: $white
  display: flex
  flex-direction: column
  justify-content: center
  border-radius: 10px
  &_info
    cursor: pointer
    width: 100%
    color: $dark-blue
    font-size: 18px
    font-weight: 600
    line-height: 24px
    letter-spacing: -0.36px
    display: flex
    justify-content: space-between
    align-items: center
    &_data
      display: flex
      gap: 16px
    &_time
      margin-right: 4px
    &_deadline
      color: $blue
</style>