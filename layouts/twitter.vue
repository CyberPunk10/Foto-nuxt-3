<template>
  <div :class="{ 'dark': darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <div class="grid grid-cols-12 m-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <!-- Left sidebar -->
          <div class="hidden md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
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
    <!-- TODO: убрать: || true -->
    <fast-dev v-if="$config.appEnv === 'dev' || $config.appEnv === 'prod_qa' || true" />
  </div>
</template>

<script setup lang="ts">
import FastDev from '~/components/dev/FastDev.vue';
import SidebarLeft from '~~/components/Twitter/Sidebar/Left/index.vue'
import SidebarRight from '~~/components/Twitter/Sidebar/Right/index.vue'

useHead({
  htmlAttrs: {
    class: '--layout-twitter',
  },
});

const colorMode = useColorMode();
const darkMode = computed(() => colorMode.preference === 'dark')
</script>

<!-- <style lang="scss">
html.--layout-twitter {

}
</style> -->
