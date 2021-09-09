import express from 'express';

import ctrl from './user.ctrl';

const router = express.Router();

router.route('/register').post(ctrl.register);
router.route('/login').post(ctrl.login);

export default router;