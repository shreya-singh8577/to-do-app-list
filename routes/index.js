var express=require('express');

var router=express.Router();

var homeController=require('../controllers/home.js');

router.get('/',homeController.home);


router.post('/description-added',homeController.home_redirect);


console.log('Router loaded');

module.exports=router;

