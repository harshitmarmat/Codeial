const express =  require('express');
const passport = require('passport');
const { route } = require('.');
const router = express.Router();
const userController = require('../controller/users_controller')
router.get('/profile', passport.checkAuthentication , userController.users);

router.get('/sign-out',userController.destroySession);


module.exports = router;