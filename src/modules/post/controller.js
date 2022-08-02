import model from './model.js';

async function POST(req, res) {
  try {
    let post = await model.post(req.body, req.file);

    if (post) {
      res.status(201).json({
        status: 201,
        message: 'ma`lumotlar ko`rib chiqish uchun adminga yuborildi',
        data: post,
      });
    } else {
      res.status(402).json({
        status: 402,
        message: 'error creating post',
        data: null,
      });
    }
  } catch (e) {
    console.error(e);
  }
}
async function PUT(req, res) {
  try {
    let post = await model.put(req.params);
    if (post) {
      res.status(201).json({
        status: 201,
        message: 'updated',
        data: post,
      });
    } else {
      res.status(402).json({
        status: 402,
        message: 'error creating post',
        data: null,
      });
    }
  } catch (e) {
    console.error(e);
  }
}
async function DELETE(req, res) {
  try {
    let post = await model.deletePost(req.params);
    if (post) {
      res.status(201).json({
        status: 201,
        message: 'updated',
        data: post,
      });
    } else {
      res.status(402).json({
        status: 402,
        message: 'error creating post',
        data: null,
      });
    }
  } catch (e) {
    console.error(e);
  }
}

export default { POST, PUT , DELETE};