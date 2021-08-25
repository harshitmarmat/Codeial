module.exports.likes = function(req,res){
    return res.end('<h1>Likes</h1>');
}
module.exports.comment = function(req,res){
    return res.end('<h1>Comment</h1>');
}

module.exports.share = function(req,res){
    return res.end('<h1>Share</h1>');
}