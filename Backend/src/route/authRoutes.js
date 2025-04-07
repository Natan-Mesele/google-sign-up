const express = require('express');
const router = express.Router();
const { googleSignUp, register } = require('../controller/authController');

router.post('/google', googleSignUp);
router.post('/register', register)

module.exports = router;