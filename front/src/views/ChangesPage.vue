<template>
  <section class="changes">
    <header class="changes_header">
      <h1>Изменения</h1>
    </header>
    <main class="changes_main">
      <div class="for_review">
        <h2>К рассмотрению</h2>
        <div class="for-review_items">
          <ReviewItem 
		  	:badges="[
				{text: 'От заказчика', color: '#3366ff'}, 
				{text: 'На рассмотрении', color: '#ff8761'}
			]"
			:change="changes[changes.length - 1]"
		/>
        </div>
      </div>
      <div class="changes_archive">
        <h2>Архив изменений</h2>
        <div class="for-review_items">
          <ReviewItem v-for="c in changes" :key="c._id" :change="c" :badges="[{text: 'От заказчика', color: '#3fe'}]" old/>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import axios from "axios";
import { storeToRefs } from "pinia";
import { onMounted, Ref, ref } from "vue";
import ReviewItem from "../components/ReviewItem.vue";
import { useDiscussionStore } from "../stores/discussion";
// import { useUserStore } from "../stores/users";

// const {user} = storeToRefs(useUserStore());
const {currentDiscussion} = storeToRefs(useDiscussionStore());
const {getCurrentDiscussion} = useDiscussionStore();

const allChanges: Ref<any[]> = ref([]);
const changes: Ref<any[]> = ref([]);

const getChanges = async () => {
  await getCurrentDiscussion();
  const providerId =  currentDiscussion.value.providerId;
  const customerId =  currentDiscussion.value.customerId;
  const res = await axios.get(`https://mg.vp-pspu.cf/back/get_all_versions/?ProviderID=${providerId}&CustomerID=${customerId}`);
  allChanges.value = res.data;
  console.log(res);
  

	for (const c of allChanges.value) {
		const res = await axios.get(`https://mg.vp-pspu.cf/back/get_difference?_id=${c._id}`);
		
		changes.value.push(res.data);
	}
};

onMounted(() => {
  getChanges();
});
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
    border-radius: 32px
    background: #fff
    height: 100%
    flex: 1
    padding: 36px
    display: flex
    flex-direction: column
    gap: 26px

    h2
      color: $dark-blue
      font-size: 24px
      font-style: normal
      font-weight: 700
      line-height: 32px
  
</style>