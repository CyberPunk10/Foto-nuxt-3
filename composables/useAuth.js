/* eslint-disable no-async-promise-executor */ // TODO: no-async-promise-executor
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

export default () => {
  const useAuthToken = () => useState('auth_token')
  const useAuthUser = () => useState('auth_user')
  const useAuthLoading = () => useState('auth_loading', () => true)

  const setToken = (newToken) => {
    const authToken = useAuthToken()
    authToken.value = newToken
  }

  const setUser = (newUser) => {
    const authUser = useAuthUser()
    authUser.value = newUser
  }

  const setIsAuthLoading = (value) => {
    const authLoading = useAuthLoading()
    authLoading.value = value
  }

  const login = ({ username, password }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch('/api/auth/login', {
          method: 'POST',
          body: {
            username,
            password
          }
        })
        setToken(data.access_token)
        setUser(data.user)
        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch('/api/auth/refresh')
        setToken(data.access_token)
        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  const getUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await useFetchApi('/api/auth/user')
        setUser(data.user)
        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  const reRefreshAccessToken = () => {
    const authToken = useAuthToken().value

    if (!authToken) {
      return
    }

    const jwt = jwt_decode(authToken)

    const newRefreshTime = jwt.exp - 60000 // за 1 минуту до истечения токена

    setTimeout(async () => {
      await refreshToken()
      reRefreshAccessToken()
    }, newRefreshTime)
  }

  const initAuth = () => {
    return new Promise(async (resolve, reject) => {
      setIsAuthLoading(true)
      try {
        await refreshToken()
        await getUser()

        reRefreshAccessToken()

        resolve(true)
      } catch (error) {
        reject(error)
      } finally {
        setIsAuthLoading(false)
      }
    })
  }

  function logout() {
    return new Promise(async (resolve, reject) => {
      try {
        await useFetchApi('/api/auth/logout', {
          method: 'POST',
        })
        await navigateTo('/twitter/auth')
        setToken(null)
        setUser(null)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }

  return {
    initAuth,
    login,
    logout,
    useAuthLoading,
    useAuthToken,
    useAuthUser
  }
}
