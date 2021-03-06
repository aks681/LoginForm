var express=require('express');
var bodyParser=require('body-parser');
var morgan=require('morgan');
var mongoose=require('mongoose');
var app=express();
var router =express.Router();
var appRoutes=require('./app/routes/api')(router);
var port = process.env.PORT || 3000;
var path=require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/client')); //allow front end folder 'public' access to all the back end stuff


app.use('/api',appRoutes); //not conflict with angular routes

mongoose.connect('mongodb://localhost:27017/webapp',function(err){    //app should be replaced with the db name
  if(err)
  console.log("Not Connected!!");
  else {
    console.log("Connected to mongodb!")
  }
});

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname + '/client/views/index.html'));
});

app.listen(port,function(){
  console.log("Server running on port 8080");
});
