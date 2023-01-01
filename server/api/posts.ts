import posts from '../../data/posts.json';
import { IncomingMessage, ServerResponse } from 'http';

export default function(req:IncomingMessage, res:ServerResponse) {
  return { posts };
}
