module.exports.home=function(req,res){
    res.render('home');
}


module.exports.home_redirect=function(req,res){
     console.log(req.body);
    res.redirect('back');
}