const express = require('express');
const router = express.Router();

console.log('routes are set up');
const homeController = require('../controller/home_controller');

router.get('/home',homeController.home);

module.exports = router ;