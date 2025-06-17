const express = require('express');
const router = express.Router();
const { validateCredentials } = require('../controllers/authController');

router.post('/validate', validateCredentials);

module.exports = router;
