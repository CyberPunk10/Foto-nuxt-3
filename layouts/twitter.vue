<template>
  <div :class="{ 'dark': darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <div class="grid grid-cols-12 m-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <!-- Left sidebar -->
          <div class="hidden md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft @on-tweet="handlerOpenTweetModal" />
            </div>
          </div>

          <!-- Main content -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <NuxtPage />
          </main>

          <!-- Right sidebar -->
          <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
    </div>

    <UIModal
      :is-open="postTweetModal"
      @on-close="handleModuleClose"
    >
      <TweetForm
        :user="user"
        :reply-to="replyTweet"
        show-reply
        @on-success="handlerFormSuccess"
      />
    </UIModal>

    <!-- TODO: убрать: || true -->
    <fast-dev v-if="$config.appEnv === 'dev' || $config.appEnv === 'prod_qa' || true" />

  </div>
</template>

<script setup>
import FastDev from '~/components/dev/FastDev.vue';
import TweetForm from '~/components/Twitter/tweet/form/TweetForm.vue';
import UIModal from '~/components/UI/UIModal.vue';
import SidebarLeft from '~~/components/Twitter/Sidebar/Left/index.vue'
import SidebarRight from '~~/components/Twitter/Sidebar/Right/index.vue'

useHead({
  htmlAttrs: {
    class: '--layout-twitter',
  },
});

const { useAuthUser } = useAuth()
const user = useAuthUser()

const colorMode = useColorMode();
const darkMode = computed(() => colorMode.preference === 'dark')

const {
  closePostTweetModal,
  getTweets,
  openPostTweetModal,
  usePostTweetModal,
  useReplyTweet,
} = useTweets();

const postTweetModal = usePostTweetModal();
const emitter = useEmitter();
const replyTweet = useReplyTweet();

emitter.$on('replyTweet', (tweet) => {
  openPostTweetModal(tweet)
})

function handlerFormSuccess() {
  closePostTweetModal();
  getTweets();
}

function handleModuleClose() {
  closePostTweetModal();
}

function handlerOpenTweetModal() {
  openPostTweetModal(null);
}

</script>

<!-- <style lang="scss">
html.--layout-twitter {

}
</style> -->
