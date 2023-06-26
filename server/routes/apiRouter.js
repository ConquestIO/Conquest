const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.use('*', (req, res) => res.status(404).send('Page not found'));

module.exports = router;
