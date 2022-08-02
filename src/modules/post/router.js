import { Router } from 'express';
import controller from './controller.js';
import { upload } from '../../lib/multer.js';

const router = Router();

router.post('/post', upload.single('img'), controller.POST);
router.put('/post/:postId', controller.PUT)
router.delete('/post/:postId', controller.DELETE)

export default router;