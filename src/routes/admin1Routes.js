const express =require('express');
const admin1Router =express.Router();
const Authordata =require('../model/Authordata');


function router(nav){
    admin1Router.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title:'Library'
        });
    });

    admin1Router.post('/add',function(req,res){
        var items={
            name:req.body.name,
            country:req.body.country,
            genre:req.body.genre,
            image:req.body.image

        }
        var author=Authordata(items);
        author.save();
        res.redirect('/authors');
       
    });
    return admin1Router

}
module.exports=router;