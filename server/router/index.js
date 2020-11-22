const express = require('express');
const router = express.Router();

const User = require('../model/user/user');
const hash = require('../middleware/hash');

router.post('/signin',hash.hash_password, User.signin);
router.post('/signup',hash.hash_password, User.signup);

module.exports = router;