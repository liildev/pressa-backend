import { Server } from 'socket.io';
import { fetchAll } from '../../lib/postgres.js';
import { GET_POSTS } from './query.js';


export default function (server) {
  const io = new Server(server, {
    cors: {
      methods: ['GET', 'POST'],
    },
  });

//   io.on('connection', async (socket) => {
//     let undefinedPosts = await fetchAll(GET_POSTS, 'undefined');
//     let activePosts = await fetchAll(GET_POSTS, 'active');
//     let deletedPosts = await fetchAll(GET_POSTS, 'deleted');
//     socket.emit('get_undefined_posts', undefinedPosts);
//     socket.emit('get_active_posts', activePosts);
//     socket.emit('get_deleted_posts', deletedPosts);
//     socket.on('post', (data)=>{
//
//     })
//   });
// }
  io.on('connection', (socket) => {

    socket.on('post', async (data, date, category, type)=>{
      let posts = await fetchAll(GET_POSTS, data.status);
      socket.emit('get_undefined_posts', posts);
      socket.emit('get_active_posts', posts);
      socket.emit('get_deleted_posts', posts);
    })
  });
}