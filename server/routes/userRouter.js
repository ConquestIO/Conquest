const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.use('*', (req, res) => res.status(404).send('Page not found'));

module.exports = router;
