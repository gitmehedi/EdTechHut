const router = require('express').Router();
const {getUsers, getUsersById, createUser, updateUser, unlinkUser} = require('./controller');

router.route('/users/').get(getUsers);
router.route('/users/').post(createUser);

router.route('/users/:id').get(getUsersById);
router.route('/users/:id').put(updateUser);
router.route('/users/:id').delete(unlinkUser);

module.exports = router;
