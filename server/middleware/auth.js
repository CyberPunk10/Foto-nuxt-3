import UrlPattern from 'url-pattern';
import { decodeAccessToken } from '../utils/jwt';
import { getUserById } from '../db/users';

export default defineEventHandler(async (event) => {
  console.log('[ ---- server middleware ]: ');
  const endpoints = [
    '/api/auth/user',
    '/api/user/tweets',
  ];

  const isHandledByThisMiddleware = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint);
    return pattern.match(event.node.req.url);
  });

  if (!isHandledByThisMiddleware) {
    console.log('[ !isHandledByThisMiddleware ]: ');
    return;
  }

  const token = getHeader(event, 'authorization')?.split(' ')[1];
  const decoded = decodeAccessToken(token);

  if (!decoded) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'Unauhthorized',
    }))
  }

  try {
    const userId = decoded.userId;
    const user = await getUserById(userId);
    event.context.auth = { user };
  } catch (error) {
    return;
  }
})