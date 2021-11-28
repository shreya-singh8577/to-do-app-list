var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/TO_DO_DATA');

var db=mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting to db'));
db.once('open',function(){
    console.log('Successfully connected to database');
});