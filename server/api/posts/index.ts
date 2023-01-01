import posts from '../../../data/posts.json';
import { IncomingMessage, ServerResponse } from 'http';

export default function(req:IncomingMessage, res:ServerResponse) {
  // console.log('[ req.headers ]: ', req.headers);
  // const { pathname } = new URL(req.url!, `http://${req.headers.host}`);
  // const id = pathname.split('/')[1]; // /posts/1

  // if (!id) {
  return { posts };
  // }

  // return posts.find(p => p.id === parseInt(id));
}
