import posts from '../../../data/posts.json';

export default defineEventHandler((event) => {
  return { posts };
})
