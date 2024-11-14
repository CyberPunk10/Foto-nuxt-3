<template>
  <div class="tweet-item__footer mt-2">
    <div class="flex items-center justify-around w-full">
      <TweetItemFooterIcon color="blue" :size="sizeIcon">
        <template #icon="{ classes }" >
          <ChatBubbleOvalLeftEllipsisIcon :class="classes" />
        </template>

        <template v-if="showStats" #default>
          <span>
            {{ props.tweet.repliesCount }}
          </span>
        </template>
      </TweetItemFooterIcon>

      <TweetItemFooterIcon color="green" :size="sizeIcon">
        <template #icon="{ classes }" >
          <ArrowPathIcon :class="classes" />
        </template>

        <template v-if="showStats" #default>
          <span>
            {{ generateRandomNumber() }}
          </span>
        </template>
      </TweetItemFooterIcon>

      <TweetItemFooterIcon color="red" :size="sizeIcon">
        <template #icon="{ classes }" >
          <HeartIcon :class="classes" />
        </template>

        <template v-if="showStats" #default>
          <span>
            {{ generateRandomNumber() }}
          </span>
        </template>
      </TweetItemFooterIcon>

      <TweetItemFooterIcon color="blue" :size="sizeIcon">
        <template #icon="{ classes }" >
          <ArrowUpTrayIcon :class="classes" />
        </template>

        <template v-if="showStats" #default >
          <span>
            {{ generateRandomNumber() }}
          </span>
        </template>
      </TweetItemFooterIcon>
    </div>
  </div>
</template>

<script setup>
import { ChatBubbleOvalLeftEllipsisIcon, ArrowPathIcon, HeartIcon, ArrowUpTrayIcon } from '@heroicons/vue/24/solid'
import TweetItemFooterIcon from './TweetItemFooterIcon.vue';

const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  }
})

const showStats = computed(() => props.compact)
const sizeIcon = computed(() => props.compact ? 5 : 8)

function generateRandomNumber() {
  return Math.floor(Math.random() * 100)
}
</script>