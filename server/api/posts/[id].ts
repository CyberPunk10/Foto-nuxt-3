import posts from '../../../data/posts.json';
// import { IncomingMessage, ServerResponse } from 'http';
// import { H3Event, RequestHeaders } from 'h3';

// export default function(req:IncomingMessage, res:ServerResponse) {
//   console.log('[ req.headers ]: ', req.headers);
//   const { pathname } = new URL(req.url!, `http://${req.headers.host}`);
//   const id = pathname.split('/')[1]; // /posts/1

//   // if (!id) {
//   //   return { posts };
//   // }

//   return posts.find(p => p.id === parseInt(id));
// }
export default defineEventHandler((event) => {
  // const getHeaders: (event: H3Event) => RequestHeaders;
  // console.log('[ getHeaders ]: ', getHeaders);

  const id = event.context.params.id; // /posts/1

  return posts.find(p => p.id === parseInt(id));
})
