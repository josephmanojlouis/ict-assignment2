const express =require('express');
const signupRouter =express.Router();


function router(nav){
    signupRouter.get('/',function(req,res){
        res.render('signUp',{
            nav,
            title:'Library'
        });
    });
    return signupRouter

}
module.exports=router;