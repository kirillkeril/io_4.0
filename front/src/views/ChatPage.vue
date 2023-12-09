<script lang="ts" setup>
import ButtonUI from '../components/ui/ButtonUI.vue';
import MessageUI from '../components/ui/MessageUI.vue';
import InlineSvg from '../components/InlineSvg.vue';
import { onMounted, Ref, ref } from 'vue';
import { useMessagesStore } from '../stores/messages';
import type { Message } from '../types/message';
import { storeToRefs } from 'pinia';
import { useDiscussionStore } from '../stores/discussion';
import { useUserStore } from '../stores/users';
import { useRouter } from 'vue-router';
import { User } from '../types/user';

const messagesStore = useMessagesStore();
const { messages } = storeToRefs(messagesStore);
const { user, getUserById } = useUserStore();
const messageInput: Ref<string> = ref('');
const { currentDiscussion } = storeToRefs(useDiscussionStore());
const router = useRouter();

const addressee: Ref<User | null> = ref(null);

const sendMessage = () => {
  if (!currentDiscussion.value) return;
  if (!user) {
    router.push('/');
    return;
  };

  const message: Message = {
    messageId: `${currentDiscussion.value?.customerId}:${currentDiscussion.value?.providerId}`,
    authorId: user!._id,
    authorName: user!.fullname,
    text: messageInput.value
  }
  if (!message.text) return;
  messagesStore.createMessage(message);
  messageInput.value = '';
}

const getAddressee = async() => {
  if(!currentDiscussion.value) return;
  if(user!.role == 'customer')
    addressee.value = await getUserById(currentDiscussion.value!.providerId);
  if(user!.role == 'provider')
    addressee.value = await getUserById(currentDiscussion.value!.customerId);
}

onMounted(() => {
  messagesStore.bindEvents();
  getAddressee();
});
</script>

<template>
  <section class="chat">
    <header class="chat_header">
      <router-link to="/suppliers" class="chat_header-title">
        <InlineSvg svg="arrow-left" />
        <h1>Чат</h1>
      </router-link>
      <ButtonUI icon="document" link="/suppliers/discussion/document" blue-fill>Документация</ButtonUI>
    </header>
    <main class="chat_main">
      <div class="chat_addressee">
        <img src="" alt="">
        <div class="addressee_data">
          <span class="addressee_data_name">{{ addressee?.fullname }}</span>
          <span class="addressee_data_company">{{ addressee?.companyName }}</span>
        </div>
      </div>

      <div class="messages" style="overflow-y:auto">
        <div v-for="(msg, idx) in messages" :key="msg._id"
          :class="msg.authorId == user?._id ? 'messages_internal' : 'messages_external'">
          <MessageUI :message="msg" :headless="messages[idx - 1]?.authorId === msg.authorId"
            :without-icon="messages[idx - 1]?.authorId == msg.authorId" />
        </div>
      </div>

      <form class="form" @submit.prevent="() => sendMessage()">
        <div class="form_input">
          <InlineSvg svg="clip" />
          <input v-model="messageInput" />
          <ButtonUI icon="send" style="padding: 0" type="subimit"></ButtonUI>
        </div>
      </form>
    </main>
  </section>
</template>


<style lang="scss" scoped>
@import '../assets/sass/colors';

.addressee_data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  &_name {
    color: $dark-blue;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 4px;
  }

  &_company {
    color: $grey;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
}

.chat {
  width: 100%;
  padding: 20px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-title {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    h1 {
      font-size: 36px
    }
  }

  &_main {
    max-height: calc(100dvh - 220px);
    border-radius: 32px;
    background: #fff;
    height: 100%;
    flex: 1;
    padding: 0 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &_addressee {
    display: inline-flex;
    justify-content: flex-start;
    gap: 12px;
    top: 0;
    background: #fff;
    width: 100%;
    padding-bottom: 12px;
    padding-top: 36px;

    img {
      border: none;
      width: 52px;
      height: 52px;
      border-radius: 9999px;
      background-color: $grey;
    }
  }
}

.messages {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  &_external {
    display: flex;
    width: 100%;
  }

  &_internal {
    display: flex;
    width: calc(100% - 36px);
    justify-content: flex-end;
    margin-right: 36px;
  }
}

.form {
  padding-bottom: 36px;
  background: #fff;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &_input {
    border-radius: 10px;
    padding: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    background: $silver;
    gap: 12px;

    input {
      color: $dark-blue;
      font-size: 18px;
      font-weight: 400;
      background: transparent;
      border: none;
      outline: none;
      outline-color: none;
      width: 100%;
    }
  }
}
</style>