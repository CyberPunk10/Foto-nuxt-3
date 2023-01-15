// import { IncomingMessage, ServerResponse } from 'http';

// export default (req: IncomingMessage, res: ServerResponse) => {
export default () => {
  return new Date().toLocaleTimeString();
};
