const express = require('express');
const router = express.Router();

console.log('routes are set up');
const homeController = require('../controller/home_controller');
// const { route } = require('./users_router');

router.get('/home',homeController.home);
router.use('/users',require('./users_router'));

//for any further routes,access from here
//router.use('/routeName', require('/routerfile'));
router.use('/post',require('./post_routes'));

module.exports = router ;