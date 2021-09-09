import express from 'express';

import ctrl from './user.ctrl';

const router = express.Router();

router.route('/register').get(ctrl.register);

export default router;