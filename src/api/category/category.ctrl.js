import _ from "lodash";

import Category from './category.model';

async function create(req, res) {
    try {
        const { name } = req.body;

        let category = await Category.findOne({ name });
        if (!_.isEmpty(category)) {
            res.status(400)
                .send({
                    ok: false,
                    message : "A category with this name is exists.",
                })
            return;
        }

        let newCategory = new Category();
        newCategory.name = name;

        await newCategory.save((err, category) => { 
            if (err) { 
                return res.status(400).send({ 
                    ok: false,
                    error: err.message
                }); 
            } 
            else { 
                return res.status(200).send({ 
                    ok: true,
                    category: {
                        name: category.name,
                        id: category._id
                    }
                }); 
            } 
        });
    } catch (e) {
        res.status(400).send(e.message);
    }
}

function getAll(req, res) {
    Category.find({}, function(err, categories) {
        if (err) {
            res.status(400).send({
                ok: false,
                error: err.message
            });
            return;
        }
        res.status(200).send({
            ok: true,
            categories
        }); 
    });
}

function deleteById(req, res) {
    const { id } = req.params;
    Category.findByIdAndRemove(id, (err, result) => {
        if (err) {
            res.status(400).send({
                ok: false,
                error: err.message
            });
            return;
        }
        res.status(200).send({
            ok: true,
            message: `The '${result.name}' category has been deleted.`
        });
    });
}

export default {
    create,
    getAll,
    deleteById
};