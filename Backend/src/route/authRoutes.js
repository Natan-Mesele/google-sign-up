const express = require('express');
const router = express.Router();
const { googleSignUp } = require('../controller/authController');

router.post('/google', googleSignUp);

module.exports = router;