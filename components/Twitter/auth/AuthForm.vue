<template>
  <div class="w-full">
    <div class="flex justify-center">
      <div class="w-10 h-10">
        <LogoTwitter />
      </div>
    </div>

    <div class="pt-5 space-y-6">
      <UIInput
        v-model="data.username"
        label="Username"
        placeholder="Enter username"
      />
      <UIInput
        v-model="data.password"
        label="Password"
        placeholder="Enter password"
        type="password"
      />

      <UIButton
        liquid
        :disabled="isButtonDisabled"
        @click="handleLogin"
      >
        Login
      </UIButton>
    </div>
  </div>
</template>

<script setup>
import LogoTwitter from '~/components/Twitter/Logo/Twitter.vue'
import UIInput from '~/components/UI/UIInput.vue'
import UIButton from '~/components/UI/UIButton.vue';

const data = reactive({
  username: '',
  password: '',
  loading: false
})

const isButtonDisabled = computed(() => !data.username || !data.password || data.loading)

async function handleLogin() {
  data.loading = true

  const { login } = useAuth()

  try {
    await login({
      username: data.username,
      password: data.password
    })

    navigateTo('/twitter')
  } catch (error) {
    console.log('[ Error handleLogin ]: ', error)
  } finally {
    data.loading = false
  }
}
</script>
