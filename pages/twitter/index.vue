<template>
  <div>
    <MainSection title="home" :loading="loading">
      <div class="border-b" :class="twitterBorderColor">
        <TweetForm
          v-if="user"
          :user="user"
          placeholder="What's happening ?"
          @on-success="handleFormSuccess"
        />
      </div>

      <ListFeed :tweets="allTweets" />
    </MainSection>
  </div>
</template>

<script setup>
import TweetForm from '~~/components/Twitter/tweet/form/TweetForm.vue'
import MainSection from '~/components/Twitter/MainSection.vue';
import ListFeed from '~/components/Twitter/tweet/ListFeed.vue';

const { getTweets, useAllTweets } = useTweets()

const { twitterBorderColor } = useTailwindConfig();

definePageMeta({
  layout: 'twitter'
})

useHead({
  title: 'Twitter | Home'
})

const { useAuthUser, useAuthLoading } = useAuth()
const user = useAuthUser()
const isAuthLoading = useAuthLoading()

const loadingListTweets = ref(false);

const loading = computed(() => isAuthLoading.value || loadingListTweets.value);

const allTweets = useAllTweets();

onBeforeMount(async () => {
  await loadTweets()
})

async function loadTweets(ignoreLoading) {
  loadingListTweets.value = ignoreLoading ? false : true;
  await getTweets();
  loadingListTweets.value = false;
}

function handleFormSuccess() {
  loadTweets(true)
}

</script>

<style lang="scss">

</style>
