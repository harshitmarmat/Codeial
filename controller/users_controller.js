const User = require("../models/user");

module.exports.users = function(req,res){
    return res.end('<h1>User Portal!</h1>');
}
//rendering the signIn page
module.exports.signIn = function(req,res){
    return res.render('signIn',{
        title : 'Sign In Page'
    });
}
//rendering the sign up page
module.exports.signUp = function(req,res){
    return res.render('signUp',{
        title : 'Sign Up Page'
    });
}

//get the signup data
module.exports.create = function(req,res){
    //TODO LATER
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    
    User.findOne({email : req.body.email},function(err,user){
        if(err){console.log('Error in finding user in sign up data',err); return;}

        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('Error in creating user while signing up',err); return;}

                return res.redirect('/users/sign-in');
            });
        }
        else{
            return res.redirect('back');
        }
    })

}

//get the signin data
module.exports.createSession = function(req,res){
    //TODO LATER

}


