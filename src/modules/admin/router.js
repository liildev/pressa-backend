import {Router} from 'express';
import controller from './controller.js'

const router = Router();

router.post('/admin', controller.LOGIN)

export default router