export default defineNuxtRouteMiddleware(() => {
  const { useAuthUser } = useAuth()
  const user = useAuthUser()
  console.log('[ middleware ][ auth.ts => authUser.value ]: ', user.value)
  if (!user.value) {
    return navigateTo('/twitter/auth')
  }
})
