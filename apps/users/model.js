const manager = require('../../db/dbm');

const name = "Users";
const tblName = 'users';
const selectableProps = ['id', 'name', 'email', 'password', 'mobile', 'created_at', 'update_at'];

const ins = manager({name, tblName, selectableProps});

const findAll = () => {
    return ins.findAll();
}

const findById = (id) => {
    return ins.findById(id);
}

const create = (props) => {
    return ins.create(props);
}

const update = (id, props) => {
    return ins.update(id, props);
}

const unlink = (id) => {
    return ins.unlink(id);
}


module.exports = {
    ins,
    findAll,
    findById,
    create,
    update,
    unlink

}