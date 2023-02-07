import { getTweet } from '../../db/tweets'
import { tweetTransformer } from '../../transformers/tweet'

export default defineEventHandler(async () => {
  const tweets = await getTweet({
    include: {
      author: true,
      mediaFiles: true,
      replies: true
    }
  })

  return {
    tweets: tweets.map(tweetTransformer)
  }
})
