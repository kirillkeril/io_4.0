<template>
	<div :class="`review review${old ? '_old' : ''}`">
		<div class="review_info" @click.prevent="() => isOpen = !isOpen">
			<div class="review_info_data">
				<span class="review_info_time">
					От 24.12.2023
					<span v-if="!old" class="review_info_deadline">(осталось 2 рабочих дня)</span>
				</span>
				<BadgeUI v-for="i in badges" :key="i.text" class="badge" :text="state" :color="i.color" />
			</div>
			<InlineSvg svg="chevron-down" :class="`icon icon${isOpen ? '_active' : ''}`" />
		</div>

		<div v-if="isOpen" :class="`review_main ${isOpen ? '' : 'review_main_disabled'}`">
			<div class="review_main_before">
				<h3><span>Ранняя</span>версия</h3>
				<div class="review_main_changes">
					<label v-for="o in getReviewOld" :key="o.label" for="name" class="review_main_field">
						<span>{{ o.label }}</span>
						<textarea name="name" :value="o.value" />
					</label>
					<!-- <label for="name" class="review_main_field">
            <span>Предмет контракта</span>
            <textarea name="name"
              placeholder="Провод монтажный витой Мезонин 2х1,5 мм в декоративной оплетке для отрытой проводки" />
          </label>
          <label for="name" class="review_main_field">
            <span>Место заключения</span>
            <textarea name="name" placeholder="Очко динозавтра" />
          </label> -->
				</div>
			</div>
			<div class="review_main_after">
				<h3><span>Измененная</span>версия</h3>
				<div class="review_main_changes">
					<label v-for="o in getReviewNew" :key="o.label" for="name" class="review_main_field">
						<span>{{ o.label }}</span>
						<textarea name="name" :value="o.value" />
					</label>
					<!-- <label for="name" class="review_main_field">
            <span>Предмет контракта</span>
            <textarea name="name"
              placeholder="Провод монтажный витой Мезонин 2х1,5 мм в декоративной оплетке для отрытой проводки" />
          </label>
          <label for="name" class="review_main_field">
            <span>Место заключения</span>
            <textarea name="name" placeholder="Очко динозавтра" />
          </label> -->
				</div>
			</div>
			<footer class="review_main_footer">
				<p v-if="change?.Message?.new">Комментарий</p>
				<textarea 
					class="comment"
					v-if="change?.Message?.new"
					:value="change.Message.new" 
				></textarea>
				<div class="buttons" v-if="!old">
					<ButtonUI blue-trans @click="writeIsShow = true">Аргументировать отказ</ButtonUI>
					<ButtonUI blue-trans v-if="state == states.success" @click="downloadPdf(change._id.new)">Открыть PDF</ButtonUI>
					<ButtonUI blue-fill icon="check" v-if="!getIsWrite" @click="setSuccessStatus">Принять</ButtonUI>
				</div>
				<textarea 
					class="comment"
					v-if="getIsWrite"
					placeholder="Аргументируйте свой отказ..."
				></textarea>
				<div class="buttons">
					<ButtonUI blue-fill v-if="getIsWrite" @click="setRejectedStatus">Отказать</ButtonUI>
				</div>
				<div class="buttons" v-if="old">
					<ButtonUI blue-fill @click="sendNewVersion(change)">Вернуться к данной версии</ButtonUI>
				</div>
			</footer>
		</div>
	</div>
</template>

<script lang="ts">
import { Ref, ref } from 'vue';
import {states, useDocumentsStore} from '../stores/document';
import { storeToRefs } from 'pinia';
import BadgeUI from '../components/ui/BadgeUI.vue'
import InlineSvg from '../components/InlineSvg.vue'

export default {
	data() {
		return {
			isOpen: false,
			writeIsShow: false
		}
	},
	props: {
		old: { type: Boolean },
		badges: { type: Object },
		change: { type: Object }
	},
	components: {
		BadgeUI,
		InlineSvg
	},
	setup() {
		const oldValues: Ref<any[]> = ref([]);
		const newValues: Ref<any[]> = ref([]);
		const { state } = storeToRefs(useDocumentsStore());
		const { sendNewVersion } = useDocumentsStore();
		const { downloadPdf } = useDocumentsStore();
		const { setSuccessStatus } = useDocumentsStore();
		const { setRejectedStatus } = useDocumentsStore();
		const { dataPdf } = useDocumentsStore();

		return { oldValues, newValues, state, states, sendNewVersion, downloadPdf, setSuccessStatus, dataPdf, setRejectedStatus }
	},
	// console.log(change);
	computed: {
		getReviewOld() {
			return this.filter(false)
		},
		getReviewNew() {
			return this.filter(true)
		},
		getIsWrite() {
			return this.writeIsShow;
		},
		getDataPdf() {
			return this.dataPdf;
		}
	},
	methods: {
		filter(value) {
			const arr = [];
			if (value) {
				Object.keys(this.change ?? {}).forEach((k) => {
					if (this.change[k].old && this.change[k].new) {
						if (k == 'timestamp') {
							let dateObj = new Date(this.change[k].new);

							let month = dateObj.getUTCMonth() + 1;
							month = String(month).length == 1 ? `0${month}` : month;

							let day = dateObj.getUTCDate();
							day = String(day).length == 1 ? `0${day}` : day;

							let year = dateObj.getUTCFullYear();

							dateObj = day + "." + month + "." + year

							arr.push({ value: dateObj, label: k })
						} else	
							arr.push({ value: this.change[k].new, label: k })
					}
				});
				return arr;
			}
			Object.keys(this.change ?? {}).forEach((k) => {
				if (this.change[k].old && this.change[k].new) {
					if (k == 'timestamp') {
						let dateObj = new Date(this.change[k].old);

						let month = dateObj.getUTCMonth() + 1;
						month = String(month).length == 1 ? `0${month}` : month;

						let day = dateObj.getUTCDate();
						day = String(day).length == 1 ? `0${day}` : day;

						let year = dateObj.getUTCFullYear();
						dateObj = day + "." + month + "." + year

						arr.push({ value: dateObj, label: k })
					} else
						arr.push({ value: this.change[k].old, label: k })
				}
			});
			return arr;
		}
	}
}


</script>

<style lang="sass" scoped>
@import '../assets/sass/colors'
.review_old
  background: #fff !important
  .badge
    background: $grey
  h3 span 
    color: $dark-blue !important 
  textarea, input
    pointer-events: none 

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