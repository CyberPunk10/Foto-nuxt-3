<template>
  <div class="flex items-center justify-around w-full">
    <TweetItemFooterIcon color="blue">
      <template #icon="{ classes }" >
        <ChatBubbleOvalLeftEllipsisIcon :class="classes" />
      </template>

      <template #default>
        {{ props.tweet.repliesCount }}
      </template>
    </TweetItemFooterIcon>

    <TweetItemFooterIcon color="green">
      <template #icon="{ classes }" >
        <ArrowPathIcon :class="classes" />
      </template>

      <template #default>
        {{ generateRandomNumber() }}
      </template>
    </TweetItemFooterIcon>

    <TweetItemFooterIcon color="red">
      <template #icon="{ classes }" >
        <HeartIcon :class="classes" />
      </template>

      <template #default>
        {{ generateRandomNumber() }}
      </template>
    </TweetItemFooterIcon>

    <TweetItemFooterIcon color="blue">
      <template #icon="{ classes }" >
        <ArrowUpTrayIcon :class="classes" />
      </template>

      <template #default>
        {{ generateRandomNumber() }}
      </template>
    </TweetItemFooterIcon>
  </div>
</template>

<script setup>
import { ChatBubbleOvalLeftEllipsisIcon, ArrowPathIcon, HeartIcon, ArrowUpTrayIcon } from '@heroicons/vue/24/solid'
import TweetItemFooterIcon from './TweetItemFooterIcon.vue';

const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  }
})

function generateRandomNumber() {
  return Math.floor(Math.random() * 100)
}
</script>