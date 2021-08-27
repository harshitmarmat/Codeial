module.exports.users = function(req,res){
    return res.end('<h1>User Portal!</h1>');
}
module.exports.signIn = function(req,res){
    return res.render('signIn',{
        title : 'Sign In Page'
    });
}
module.exports.signUp = function(req,res){
    return res.render('signUp',{
        title : 'Sign Up Page'
    });
}
