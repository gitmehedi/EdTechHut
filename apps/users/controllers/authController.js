const authModel = require('../models/authModel');


const registerUser = (req, res, next) => {
    const props = req.body;
    authModel.register(props).then(access=>{
        res.json({
            success: 'User registered successfully',
            accessToken:access,
            refreshToken:access
        });
    });
}
const loginUser = (req, res, next) => {
}
const logoutUser = (req, res, next) => {
}

module.exports = {registerUser, loginUser, logoutUser}