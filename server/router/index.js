const express = require('express');
const router = express.Router();

const User = require('../model/user/user');

router.post('/signin', User.signin);
router.post('/signup', User.signup);

module.exports = router;