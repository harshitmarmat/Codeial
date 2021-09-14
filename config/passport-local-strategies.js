const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

//setting up passport authentication of signedin user
passport.use(new LocalStrategy({
        usernameField : 'email'
    },
    function(email, password , done){
        User.findOne({email:email},function(err,user){
            if(err){
                console.log('Error in finding the user ---> passport');
                return done(err);
            }
            if(!user || user.password != password){
                console.log('Invalid User/Password');
                return done(null,false);
            }
            console.log("found user");
            return done(null,user);
        });
    }
));

//setting up id for cookie 
passport.serializeUser(function(user,done){
    return done(null, user.id);
});

//finding user from cookie
passport.deserializeUser(function(id, done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in finding the user ---> passport');
            return done(err);
        }
        return done(null,user);
    });
});

//check the user is authenticated 
passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req , res , next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}
module.exports = passport;