const express =require('express');
const authorRouter =express.Router();
const Authordata =require('../model/Authordata');
function router(nav){
    // var authors=[
    //     {
    //         Name:'Joseph Barbera',
    //         born:'24 March 1911',
    //         country:'United States',
    //         img:'barbera.jpg'
    //     },
    //     {
    //         Name:'J.K Rowling',
    //         born:'31 July 1965',
    //         country:'United Kingdom',
    //         img:'jk.jpg'
    //     },
    //     {
    //         Name:'Vaikom Muhammed Basheer',
    //         born:'21 January 1908',
    //         country:'Kerala,India',
    //         img:'vaikom.jpg'
    //     }
    // ]
    
    authorRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render('authors',{
                nav,
            title:'Library',
            authors
        
            });

        })

      
    });
    
    authorRouter.get('/:id',function(req,res){
        const id =req.params.id
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('author',{
                nav,
                title:'Library',
                author
            });
        })
       
    });
    authorRouter.get('/addAuthor',function(req,res){
        res.render("addAuthor",
            {
                nav,
                title:'Add Author'
            });
        });
        authorRouter.get('/editauthors/:id',function(req,res){
            const id = req.params.id;
            Authordata.findOne({_id: id})
            .then(function(author){
                console.log(author);
                res.render('editauthors',{
                        nav,
                        title:'Update',
                        author
                    });
                })
    
        });
    
        authorRouter.post('/b/:id',  function(req,res){
            const id=req.params.id
           
            const item={
                name:req.body.name,
                country:req.body.country,
                genre:req.body.genre,
                image:req.body.image
            }
            console.log(item);
            Authordata.findByIdAndUpdate({_id:id},{$set:item},function () {
                res.redirect("/authors");
                
            });
    
        });
    
        authorRouter.get('/l/t/:id',function(req,res){
            const id=req.params.id
            Authordata.findByIdAndDelete({_id:id},function () {
                    res.redirect("/authors");
                })
    
        });
    
    

    return authorRouter;
    

}


module.exports=router;