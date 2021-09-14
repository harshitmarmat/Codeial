const express = require('express');
const passport = require('passport');
const  router = express.Router();
const  userController = require('../controller/users_controller');
router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);
router.post('/create',userController.create);

router.post('/create-session', passport.authenticate(
    'local',
    {
        
        failureRedirect : '/users/sign-up'
    },
) , userController.createSession);

module.exports = router;