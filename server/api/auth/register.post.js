import { sendError } from 'h3'
import { createUser, getUserByEmail, getUserByUsername } from '../../db/users'
import { userTransformer } from '../../transformers/user'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username, email, password, repeatPassword, name } = body

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Invalid params'
    }))
  }

  if (password !== repeatPassword) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Password do not match'
    }))
  }

  if (await checkExistUser({ username, email })) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'User already exists'
    }))
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: 'https://picsum.photos/200/200'
  }

  const user = await createUser(userData)

  return {
    body: userTransformer(user)
  }
})

async function checkExistUser({ username, email }) {
  let user = await getUserByUsername(username);

  if (user) return true;

  user = await getUserByEmail(email);

  return !!user;
}
