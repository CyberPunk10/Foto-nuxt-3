import jwt from 'jsonwebtoken'

const generateAccessToken = (user) => {
  const config = useRuntimeConfig()

  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: '10min'
  })
}

const generateRefreshToken = (user) => {
  const config = useRuntimeConfig()

  return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
    expiresIn: '24h'
  })
}

export const generateTokens = (user) => {
  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user)

  return {
    accessToken,
    refreshToken
  }
}

export const decodeRefreshToken = (token) => {
  const config = useRuntimeConfig()

  try {
    return jwt.verify(token, config.jwtRefreshSecret)
  } catch (error) {
    console.log('[ Error decodeRefreshToken ]: ', error);
    return null
  }
}

export const decodeAccessToken = (token) => {
  const config = useRuntimeConfig()

  try {
    return jwt.verify(token, config.jwtAccessSecret)
  } catch (error) {
    console.log('[ Error decodeAccessToken ]: ', error);
    return null
  }
}

export const sendRefreshToken = (event, token) => {
  setCookie(event, 'refresh_token', token, {
    httpOnly: true,
    sameSite: 'strict'
  })
}
