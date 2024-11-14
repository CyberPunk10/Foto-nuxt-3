<template>
  <div>
    <TweetItem :tweet="props.tweet" />

    <TweetForm
      :user="user"
      placeholder="Tweet your reply"
      :reply-to="props.tweet"
      @on-success="handleFormSuccess"
    />

    <ListFeed :tweets="replies" />
  </div>
</template>

<script setup>
import TweetItem from './Item/TweetItem.vue';
import TweetForm from '~~/components/Twitter/tweet/form/TweetForm.vue'
import ListFeed from '~/components/Twitter/tweet/ListFeed.vue';

const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  }
})

const replies = computed(() => props.tweet?.replies || [])

function handleFormSuccess(tweet) {
  navigateTo({
    path: `/twitter/status/${tweet.id}`,
  })
}
</script>