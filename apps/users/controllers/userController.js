const models = require('../models/userModel');


const getUsers = (req, res, next) => {
    const props = req.body;

    models.findAll(props).then(users => {
        res.json({
            ok: true,
            message: 'Get All Users',
            users
        });
    }).catch(next);
};
const getUsersById = (req, res, next) => {
    let id = parseInt(req.params.id);

    models.findById(id).then(user => {
        res.json({user})
    }).catch(next);
};
const createUser = (req, res, next) => {
    const props = req.body;

    models.create(props).then(user => {
        res.json({user});
    }).catch(next);
};
const updateUser = (req, res, next) => {
    let id = parseInt(req.params.id, 10);
    let props = req.body;

    models.update(id,props).then(user => {
        res.json({user});
    }).catch(next);
};
const unlinkUser = (req, res, next) => {
    const id = parseInt(req.params.id,10);

    models.unlink(id).then(user => {
        console.log('record');
        res.json({
            success: true,
            user
        });
    }).catch(next);
};

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    unlinkUser
}
