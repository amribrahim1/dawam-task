import mongoose from 'mongoose';

import Todo from './todo.model';

async function create(req, res) {
    try {
        const { name, category } = req.body;
        const { userId } = req;

        let newTodo = new Todo();
        newTodo.name = name;
        newTodo.user = userId;
        newTodo.category = category;

        await newTodo.save((err, todo) => { 
            if (err) { 
                return res.status(400).send({ 
                    ok: false,
                    error: err.message
                }); 
            } 
            else { 
                return res.status(200).send({ 
                    ok: true,
                    todo
                }); 
            } 
        });
    } catch (e) {
        res.status(400).send(e.message);
    }
}

async function getAll(req, res) {
    try {
        const todos = await Todo.find({}).sort({ createdAt : -1} );
        res.status(200).send({
            ok: true,
            todos
        }); 
    } catch (err) {
        res.status(400).send({ 
            ok: false,
            error: err.message
        }); 
    }
}

async function getMyTodos(req, res) {
    try {
        const { userId } = req;
        
        const todos = await Todo.find({ user: userId }).sort({ createdAt : -1} )
        res.status(200).send({
            ok: true,
            todos
        }); 
    } catch (err) {
        res.status(400).send({ 
            ok: false,
            error: err.message
        }); 
    }
}

async function deleteById(req, res) {
    const { todoId } = req.params;
    const { userId } = req;
    const todo = await Todo.findById({ _id: todoId });

    if (todo === null) {
        res.status(404).send({
            ok: false,
            error: `There is no todo with id '${todoId}'!`
        });
        return;
    }

    // Delete if only admin or its user
    if ((!req.userType || req.userType !== 'admin') && String(mongoose.Types.ObjectId(userId)) !== String(todo.user)) {
        res.status(400).send({
            ok: false,
            error: "You are not allowed to delete this todo!"
        });
        return;
    }
    Todo.findByIdAndRemove({ _id: todoId }, (err, result) => {
        if (err) {
            res.status(400).send({
                ok: false,
                error: err.message
            });
            return;
        }
        res.status(200).send({
            ok: true,
            message: `The '${result.name}' todo has been deleted.`
        });
    });
}

async function getMyTodosByCategory(req, res) {
    try {
        const { userId } = req;
        const { catId } = req.params;

        const todos = await Todo.find({ user: userId, category: catId }).sort({ createdAt : -1} )
        res.status(200).send({
            ok: true,
            todos
        }); 
    } catch (err) {
        res.status(400).send({ 
            ok: false,
            error: err.message
        }); 
    }
}

async function getAllByCategory(req, res) {
    try {
        const { catId } = req.params;

        const todos = await Todo.find({ category: catId }).sort({ createdAt : -1} )
        res.status(200).send({
            ok: true,
            todos
        }); 
    } catch (err) {
        res.status(400).send({ 
            ok: false,
            error: err.message
        }); 
    }
}

async function getById(req, res) {
    const { todoId } = req.params;
    const { userId } = req;

    const todo = await Todo.findById({ _id: todoId });
    
    if (todo === null) {
        res.status(404).send({
            ok: false,
            error: `There is no todo with id '${todoId}'!`
        });
        return;
    }

    // Get if only admin or its user
    if ((!req.userType || req.userType !== 'admin') && String(mongoose.Types.ObjectId(userId)) !== String(todo.user)) {
        res.status(400).send({
            ok: false,
            error: "You are not allowed to delete this todo!"
        });
        return;
    }
    res.status(200).send({
        ok: true,
        todo
    });
}

export default {
    create,
    getMyTodos,
    getAll,
    deleteById,
    getMyTodosByCategory,
    getAllByCategory,
    getById
};