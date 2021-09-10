import express from 'express';

import ctrl from './todo.ctrl';
import { authAdmin, authUser } from '../../config/auth';

const router = express.Router();

router.route('/todo')
// get all todos of the user
.get(authUser, ctrl.getMyTodos)
// Create a new todo
.post(authUser, ctrl.create);

router.route('/todo/category/:catId')
// Get all todos sorted by category of the user
.get(authUser, ctrl.getMyTodosByCategory)

// Get all todos
router.route('/todo/all')
.get(authAdmin, ctrl.getAll)

router.route('/todo/all/:catId')
// Get all todos sorted by category
.get(authAdmin, ctrl.getAllByCategory)

router.route('/todo/:todoId')
// Get one todo by id
.get(authUser, ctrl.getById)
// Delete a todo
.delete(authUser, ctrl.deleteById)

export default router;