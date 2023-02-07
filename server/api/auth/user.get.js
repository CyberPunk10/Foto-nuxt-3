import { userTransformer } from '../../transformers/user'

// TODO: (eslint подправить)
// eslint-disable-next-line require-await
export default defineEventHandler(async (event) => {
  return {
    user: userTransformer(event.context.auth?.user)
  }
})
