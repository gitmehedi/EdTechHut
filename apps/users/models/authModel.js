const rootPath = require('path').resolve('./');
const manager = require(rootPath + '/db/dbm');

const name = "Users";
const tblName = 'users';
const selectableProps = ['id', 'name', 'email', 'password', 'mobile', 'created_at', 'update_at'];

const ins = manager({name, tblName, selectableProps});


const register = (props) => {

}
const login = (props) => {
}
const logout = (props) => {
}

module.exports = {
    ins,
    register,
    login,
    logout
}