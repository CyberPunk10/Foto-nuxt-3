<template>
  <div class="test">
    <div v-if="loading">
      <UISpinner />
    </div>
    <div v-else>
      <TweetFormInput
        :user="props.user"
        @on-submit="handlerFormSubmit"
      />
    </div>
  </div>
</template>

<script setup>
import useTweets from '~~/composables/useTweets'
import TweetFormInput from './TweetFormInput.vue'
import UISpinner from '../../UI/UISpinner.vue'

const { postTweet } = useTweets()

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const loading = ref(false)

async function handlerFormSubmit(data) {
  loading.value = true
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles
    })
    console.log('[ response ]: ', response) // TODO:
  } catch (error) {
    console.log('[ error ]: ', error)
  } finally {
    loading.value = false
  }
}
</script>
