const rootPath = require('path').resolve('./');
const manager = require(rootPath + '/db/dbm');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = '09f26e402586e2faa8da4c98a35f1b20d6b033c60';

const bcrypt = require('bcrypt');
const SALT_ROUND = 10;
const hashPassword = (password) => {
    return bcrypt.hash(password, SALT_ROUND);
}
const verifyPassword = (password, hash) => {
    return bcrypt.compare(password, hash);
}

const expires = Math.floor(Date.now() / 1000) + (60 * 60);
const generateAccessToken = (username) => {
    return jwt.sign({exp: expires, data: username}, TOKEN_SECRET);
}

const preRegister = (user) => {
    if (!user.password)
        return Promise.resolve(user);

    return hashPassword(user.password)
        .then(hash => ({...user, password: hash}))
        .catch(err => {
            `Error in Hashing Password: ${err}`
        })
}

const name = "Users";
const tblName = 'users';
const selectableProps = ['id', 'name', 'email', 'password', 'mobile', 'created_at', 'update_at'];

const ins = manager({name, tblName, selectableProps});


const register = (props) => preRegister(props).then(user => {
    ins.create(user);
    return generateAccessToken(user.name);
})
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