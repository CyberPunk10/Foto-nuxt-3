export default defineNuxtRouteMiddleware(() => {
  const { useAuthUser } = useAuth()
  const user = useAuthUser()
  console.log('[ client middleware ][ auth.ts => user.value?.id ]: ', user.value?.id)
  if (!user.value) {
    return navigateTo('/twitter/auth')
  }
})
