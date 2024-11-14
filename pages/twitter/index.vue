<template>
  <div>
    <MainSection title="home" :loading="loading">
      <Head>
        <Title>Home / Twitter</Title>
      </Head>

      <div class="border-b" :class="twitterBorderColor">
        <TweetForm
          v-if="user"
          :user="user"
          placeholder="What's happening ?"
          @on-success="handleFormSuccess"
        />
      </div>

      <ListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>

<script setup>
import TweetForm from '~~/components/Twitter/tweet/form/TweetForm.vue'
import MainSection from '~/components/Twitter/MainSection.vue';
import ListFeed from '~/components/Twitter/tweet/ListFeed.vue';

const { getHomeTweets } = useTweets()

const { twitterBorderColor } = useTailwindConfig();

definePageMeta({
  middleware: 'auth',
  layout: 'twitter'
})

const { useAuthUser, useAuthLoading } = useAuth()
const user = useAuthUser()
const isAuthLoading = useAuthLoading()

const loadingListTweets = ref(false);

const loading = computed(() => isAuthLoading.value || loadingListTweets.value);

const homeTweets = ref([]);

onBeforeMount(async () => {
  await loadTweets()
})

async function loadTweets(ignoreLoading) {
  loadingListTweets.value = ignoreLoading ? false : true;

  try {
    const { tweets } = await getHomeTweets();
    homeTweets.value = tweets
  } catch (error) {
    console.log('[ Error getHomeTweets ]: ', error);
  } finally{
    loadingListTweets.value = false;
  }
}

function handleFormSuccess() {
  loadTweets(true)
}

</script>

<style lang="scss">

</style>
