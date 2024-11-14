<template>
  <div>
    <TweetItemHeader :tweet="props.tweet" />

    <div class="tweet-item__body" :class="tweetBodyWrapper">
      <p class="flex-shrink font-medium text-gray-800 w-auto dark:text-white" :class="textSize">
        {{ props.tweet.text }}
      </p>

      <div
        v-for="image in props.tweet.mediaFiles"
        :key="image.id"
        class="flex my-3 border-2 rounded-2xl"
        :class="twitterBorderColor"
      >
        <img
          :src="image.url"
          :alt="image.url"
          class="w-full rounded-2xl"
        >
      </div>
    </div>

    <TweetItemFooter
      v-if="!props.hideActions"
      :tweet="props.tweet"
      :compact="props.compact"
      @on-comment-click="handleOnCommentClick"
    />
  </div>
</template>

<script setup>
import TweetItemHeader from './TweetItemHeader.vue';
import TweetItemFooter from './TweetItemFooter.vue';

const { twitterBorderColor } = useTailwindConfig();

const emitter = useEmitter();

const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
  hideActions: {
    type: Boolean,
    default: false,
  }
})

const tweetBodyWrapper = computed(() => props.compact ? 'ml-16' : 'ml-2 mt-4')
const textSize = computed(() => props.compact ? 'text-base' : 'text-2xl')

function handleOnCommentClick() {
  emitter.$emit('replyTweet', props.tweet)
}
</script>