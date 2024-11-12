import UrlPattern from 'url-pattern'
import { decodeAccessToken } from '../utils/jwt'
import { getUserById } from '../db/users'

export default defineEventHandler(async (event) => {
  console.log('\n\n[ server middleware auth ][ event.node.req.url ]: ', event.node.req.url);
  const endpoints = [
    '/api/auth/user',
    '/api/user/tweets',
    '/api/tweets'
  ]

  const isHandledByThisMiddleware = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint)
    return pattern.match(event.node.req.url)
  })

  console.log('[ server middleware auth ][ isHandledByThisMiddleware ]: ', isHandledByThisMiddleware);

  if (!isHandledByThisMiddleware) {
    return
  }

  const token = getHeader(event, 'authorization')?.split(' ')[1]
  const decoded = decodeAccessToken(token)

  if (!decoded) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'Unauhthorized'
    }))
  }

  try {
    const { userId } = decoded
    const user = await getUserById(userId)
    event.context.auth = { user }
  } catch (error) {
    console.log('[ error ]: ', error)
  }
})
