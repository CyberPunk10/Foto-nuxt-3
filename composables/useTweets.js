export default () => {
  const postTweet = (formData) => {
    const form = new FormData()

    form.append('text', formData.text)
    form.append('replyTo', formData.replyTo)

    formData.mediaFiles.forEach((mediaFile, index) => {
      form.append(`media_file_${index}`, mediaFile)
    })

    return useFetchApi('/api/user/tweets', {
      method: 'POST',
      body: form
    })
  }

  const useAllTweets = () => useState('home_tweets', () => []);

  async function getTweets(params = {}) {
    try {
      const response = await useFetchApi('/api/tweets', {
        method: 'GET',
        params,
      });

      if (!params.query) {
        const allTweets = useAllTweets();
        allTweets.value = response.tweets;
      }

      return response;
    } catch (error) {
      console.log('[ Error useTweets.getTweets ]: ', error);
      throw error;
    }
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

  const usePostTweetModal = () => useState('post_tweet_modal', () => false);
  const useReplyTweet = () => useState('reply_tweet', () => null);

  const setReplyTo = (tweet) => {
    const replyTweet = useReplyTweet()
    replyTweet.value = tweet
  }

  const closePostTweetModal = () => {
    const postTweetModal = usePostTweetModal();
    postTweetModal.value = false;
  }
  const openPostTweetModal = (tweet = null) => {
    const postTweetModal = usePostTweetModal();
    postTweetModal.value = true;
    setReplyTo(tweet);
  }

  return {
    closePostTweetModal,
    getTweets,
    getTweetById,
    openPostTweetModal,
    postTweet,
    useAllTweets,
    usePostTweetModal,
    useReplyTweet,
  }
}
