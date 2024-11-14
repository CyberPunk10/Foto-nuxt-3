<template>
  <div>
    <div
      v-if="loading"
      class="flex items-center justify-center py-6"
    >
      <UISpinner />
    </div>

    <div v-else>
      <TweetItem
        v-if="props.replyTo && props.showReply"
        :tweet="props.replyTo"
        hide-actions
      />
      <TweetFormInput
        :placeholder="props.placeholder"
        :user="props.user"
        @on-submit="handlerFormSubmit"
      />
    </div>
  </div>
</template>

<script setup>
import useTweets from '~~/composables/useTweets'
import TweetFormInput from './TweetFormInput.vue'
import UISpinner from '~~/components/UI/UISpinner.vue'
import TweetItem from '../Item/TweetItem.vue';

const { postTweet } = useTweets()

const emits = defineEmits(['onSuccess'])

const props = defineProps({
  user: {
    type: Object,
    required: true
  },
  placeholder: {
    type: String,
    default: '',
  },
  replyTo: {
    type: Object,
    default: null,
  },
  showReply: {
    type: Boolean,
    default: false
  }
})

const loading = ref(false)

async function handlerFormSubmit(data) {
  loading.value = true

  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles,
      replyTo: props.replyTo?.id
    })
    emits('onSuccess', response.tweet)
  } catch (error) {
    console.log('[ Error handlerFormSubmit ]: ', error)
  } finally {
    loading.value = false
  }
}
</script>
