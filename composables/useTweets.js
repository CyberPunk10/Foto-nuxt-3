export default () => {
  const postTweet = (formData) => {
    const form = new FormData()

    form.append('text', formData.text)

    formData.mediaFiles.forEach((mediaFile, index) => {
      form.append(`media_file_${index}`, mediaFile)
    })

    return useFetchApi('/api/user/tweets', {
      method: 'POST',
      body: form
    })
  }

  const getHomeTweets = () => {
    return new Promise((resolve, reject) => {
      try {
        const response = useFetchApi('/api/tweets', {
          method: 'GET',
        })
        resolve(response)
      } catch (error) {
        console.log('[ Error useTweets.getHomeTweets ]: ', error);
        reject(error)
      }
    });
  }

  const getTweetById = (tweetId) => {
    return new Promise((resolve, reject) => {
      try {
        const response = useFetchApi(`/api/tweets/${tweetId}`, {
          method: 'GET',
        })
        resolve(response)
      } catch (error) {
        console.log('[ Error useTweets.getTweetById ]: ', error);
        reject(error)
      }
    });

  }

  return {
    getHomeTweets,
    getTweetById,
    postTweet,
  }
}
