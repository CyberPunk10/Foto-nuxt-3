<template>
  <div class="flex h-screen">
    <div class="relative flex-1 w-0 lg:block">
      <img
        class="absolute inset-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      >
    </div>
    <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="flex items-center w-full h-full max-w-sm mx-auto lg:w-96">
        <AuthForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import AuthForm from '~/components/Twitter/auth/AuthForm.vue'
</script>
