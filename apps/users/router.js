const router = require('express').Router();
const {getUsers, getUsersById, createUser, updateUser, unlinkUser} = require('./controllers/userController');
const {registerUser,loginUser,logoutUser} = require('./controllers/authController');

router.route('/users/').get(getUsers);
router.route('/users/').post(createUser);

router.route('/users/:id').get(getUsersById);
router.route('/users/:id').put(updateUser);
router.route('/users/:id').delete(unlinkUser);

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);

module.exports = router;
