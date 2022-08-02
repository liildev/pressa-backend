import { Server } from 'socket.io';
import { fetchAll } from '../../lib/postgres.js';
import { GET_POSTS } from './query.js';


export default function (server) {
  const io = new Server(server, {
    cors: {
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {

    socket.on('post', async (data, date, category, type)=>{
      let posts = await fetchAll(GET_POSTS, data.status);
      socket.emit('get_undefined_posts', posts);
      socket.emit('get_active_posts', posts);
      socket.emit('get_deleted_posts', posts);
    })
  });
}