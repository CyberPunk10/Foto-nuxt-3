import { getCookie } from 'h3'
import { removeRefreshToken } from '~/server/db/refreshToken';

export default defineEventHandler(async (event) => {
  try {
    const refreshToken = getCookie(event, 'refresh_token')

    await removeRefreshToken(refreshToken)
  } catch (error) {
    console.log('[ Error logout.post.js ]: ', error);
  }

  sendRefreshToken(event, null)

  return {
    message: 'Done',
  }
})
