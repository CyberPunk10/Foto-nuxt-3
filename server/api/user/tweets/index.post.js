import formidable from 'formidable'
import { uploadToCloudinary } from '~~/server/utils/cloudinary'
import { createTweet } from '~~/server/db/tweets'
import { createMediaFile } from '~~/server/db/mediaFiles'
import { tweetTransformer } from '~~/server/transformers/tweet'

export default defineEventHandler(async (event) => {
  const form = formidable({})

  const response = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) {
        reject(err)
      }
      resolve({ fields, files })
    })
  })

  const { fields, files } = response

  const userId = event.context?.auth?.user.id

  const tweetData = {
    authorId: userId,
    text: fields.text
  }

  const { replyTo } = fields

  if (replyTo) {
    tweetData.replyToId = replyTo
  }

  const tweet = await createTweet(tweetData)

  const filePromises = Object.keys(files).map(async (key) => {
    const file = files[key]

    const cloudinaryResourse = await uploadToCloudinary(file.filepath)

    return createMediaFile({
      url: cloudinaryResourse.secure_url,
      providerPublicId: cloudinaryResourse.public_id,
      userId,
      tweetId: tweet.id
    })
  })

  await Promise.all(filePromises)

  return {
    tweet: tweetTransformer(tweet)
  }
})
