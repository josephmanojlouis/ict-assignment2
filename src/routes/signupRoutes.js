const express =require('express');

const signupRouter =express.Router();
const Signupdata =require('../model/Signupdata');


function router(nav){
    signupRouter.get('/',function(req,res){
        
        res.render('signUp',{
            nav,
            title:'Library'
        });
    });
    signupRouter.get('/add',function(req,res){
        var items={
            firstname:req.query.firstname,
            lastname:req.query.lastname,
            email:req.query.email,
            password:req.query.password

        }
        var signup=Signupdata(items);
        signup.save();
        res.redirect('/books');
    
    });
    return signupRouter;

}
module.exports=router;