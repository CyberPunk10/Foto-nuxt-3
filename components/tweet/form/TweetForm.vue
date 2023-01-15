<template>
  <div class="test">
    <TweetFormInput
      :user="props.user"
      @on-submit="handlerFormSubmit"
    />
    <TweetFormInput
      :user="props.user"
      @on-submit="handlerFormSubmit"
    />
  </div>
</template>

<script setup>
import TweetFormInput from './TweetFormInput.vue';
import useTweets from '~~/composables/useTweets';

const { postTweet } = useTweets();

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

async function handlerFormSubmit(data) {
  try {
    const response = await postTweet(data);
    console.log('[ response ]: ', response);
  } catch (error) {
    console.log('[ error ]: ', error);
  }
}
</script>
