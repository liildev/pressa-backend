export const GET_POSTS = `select * from posts where status = $1 order by post_id desc`