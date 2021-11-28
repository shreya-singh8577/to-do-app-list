var mongoose=require('mongoose');


var todoSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,  // here u can use 'Date' also ...
        required:true
    }
});

var todo=mongoose.model('todo',todoSchema);
module.exports=todo;

