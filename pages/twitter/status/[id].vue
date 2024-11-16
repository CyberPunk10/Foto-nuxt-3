<template>
  <div>
    <MainSection title="Tweet" :loading="loading">
      <Head>
        <Title>Detail / Twitter</Title>
      </Head>

      <TweetDetails :tweet="tweet" :user="user"/>
    </MainSection>
  </div>
</template>

<script setup>
import MainSection from '~/components/Twitter/MainSection.vue';
import TweetDetails from '~/components/Twitter/tweet/TweetDetails.vue';

definePageMeta({
  layout: 'twitter'
})

function getTweetIdFromRoute() {
  return useRoute().params.id;
}

const { useAuthUser } = useAuth()
const user = useAuthUser()

const  loading = ref(false)

const tweet = ref(null);

onBeforeMount(() => {
  getTweet()
})

watch(() => useRoute().fullPath, () => getTweet());

const { getTweetById } = useTweets();

async function getTweet() {
  loading.value = true;

  try {
    const response = await getTweetById(getTweetIdFromRoute());
    tweet.value = response.tweet;
  } catch (error) {
    console.log('[ Error getTweet ]: ', error);
  } finally {
    loading.value = false;
  }
}

</script>

<!-- <style lang="scss">

</style> -->