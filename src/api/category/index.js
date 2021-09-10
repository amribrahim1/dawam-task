import express from 'express';

import ctrl from './category.ctrl';
import { authAdmin, authUser } from '../../config/auth';

const router = express.Router();

router.route('/category')
// get all categories
.get(authUser, ctrl.getAll)
// Create a new category
.post(authUser, ctrl.create);


// Delete a category
router.route('/category/:id')
.delete(authUser, ctrl.deleteById)

export default router;