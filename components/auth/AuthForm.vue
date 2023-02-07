<template>
  <div>
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

      <div>
        <button type="button" @click="handleLogin">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import UIInput from '~~/components/UI/UIInput.vue'

const data = reactive({
  username: '',
  password: '',
  loading: false
})

async function handleLogin() {
  data.loading = true
  const { login } = useAuth()
  try {
    await login({
      username: data.username,
      password: data.password
    })
  } catch (error) {
    console.log('[ error ]: ', error)
  } finally {
    data.loading = false
  }
}
</script>
