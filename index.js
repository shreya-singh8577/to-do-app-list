var express=require('express');
 var port=8080;

 var app=express();

app.set('view engine','ejs');
app.set('views','./views');

var db=require('./config/mongoose');

var todo=require('./models/todo_schema');

// app.get('/',require('./routes'));

app.use(express.urlencoded());

app.use(express.static('assets'));
app.get('/',function(req,res){

   todo.find({},function(err,dataBaseData){
       if(err){
           console.log('Error in fetching data...');
           return;
       }
       res.render('home',{
         fetchedData:dataBaseData
    });
   }); 
});

app.post('/deleted-data',function(req,res){
    todo.findByIdAndDelete(req.body.check,function(err){
         if(err){
            console.log('Error in deleting data',err);
             return;
         }
            
    });
    res.redirect('back');
});

app.post('/description-added',function(req,res){
    console.log(req.body);
    todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.due_date
    },function(err,newData){
        if(err){
            console.log('error in storing data');
            return;
        }
        console.log('Stored data:',newData);
    });
    res.redirect('back');
});


 app.listen(port,function(err){
     if(err){ 
         console.log('error in express connenction');
         return;
     }
     console.log('Successfully connented by express');
 });

 



