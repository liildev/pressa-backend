import { fetch } from "../../lib/postgres.js";
import { POST, PUT, DELETE } from "./query.js";

async function post(
  {
    creatorName,
    creatorProfession,
    creatorTel,
    creatorTel2,
    conferenceDate,
    conferenceCategory,
    conferenceType,
    conferenceLink,
    postTitle,
    postDesc,
    postFullDescription,
  },
  img
) {
  try {
    return await fetch(
      POST,
      creatorName,
      creatorProfession,
      creatorTel,
      creatorTel2,
      conferenceDate,
      conferenceCategory,
      conferenceType,
      conferenceLink,
      postTitle,
      postDesc,
      img.filename,
      postFullDescription
    );
  } catch (e) {
    console.error(e);
  }
}

async function put({ postId }) {
  try {
    return await fetch(PUT, postId);
  } catch (e) {
    console.error(e);
  }
}
async function deletePost({ postId }) {
  try {
    return await fetch(DELETE, postId);
  } catch (e) {
    console.error(e);
  }
}

export default { post, put, deletePost };
