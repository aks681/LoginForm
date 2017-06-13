var User=require('../models/user');
var jwt=require('jsonwebtoken');
var secret = 'awesome';
var mongoose=require('mongoose');
//router= export all accessing done to server
module.exports = function(router){

router.post('/authenticate',function(req,res){
  User.findOne({username: req.body.username}).select('email username password').exec(function(err,user){
    if(err)
     throw err;
     if(!user){
       res.json({success: false, message: "User Not Registered"});
     } else if(user)
     {
       if(req.body.password){
       var validPassword = user.comparePassword(req.body.password);
       if(!validPassword){
         res.json({success: false, message :"Password Incorrect"});
       }
       else{
         var token = jwt.sign({username: user.username, email: user.email},secret,{expiresIn:'24h'});
         res.json({success: true, message: "Successfully Logged In", token: token});
       }
     }
     else {
       res.json({success: false, message :"No Password provided"});
     }
     }
  });
});
//express middleware
/*router.use(function(req, res, next){
  var token=req.body.token||req.body.query||req.headers['x-access-token'];
  if(token)
  {
    jwt.verify(token,secret,function(err,decoded){
      if(err)
      {
        res.json({success: false, message: "User Session Expired Invalid token"});
      }
      else {
        req.decoded= decoded;
        next();
      }
    });
  }
  else{
    res.json({success: false, message: "No User Logged In"});
  }
});
*/
router.post('/current',function(req,res){
  res.send(req.decoded);
});

  return router;
}
