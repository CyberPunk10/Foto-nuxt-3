export default defineNuxtRouteMiddleware(() => {
  console.log('[ auth.ts middleware ]: ');
  const user = useState('user');
  if (!user.value) {
    return navigateTo('/');
  }
});
