<template>
  <div>
     <div v-if="isEmptyArry" class="p-4">
        <p class="text-center text-gray-500">
          No tweets 😢
        </p>
     </div>

    <div
      v-for="tweet in props.tweets"
      :key="tweet.id"
      class="pb-4 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
      :class="[twitterBorderColor, defaultTransition]"
    >
      <TweetItem :tweet="tweet" />
    </div>
  </div>
</template>

<script setup>
import TweetItem from './Item/TweetItem.vue';

const { twitterBorderColor, defaultTransition} = useTailwindConfig();

const props = defineProps({
  tweets: {
    type: Array,
    required: true,
  }
})

const isEmptyArry = computed(() => props.tweets.length === 0)

</script>