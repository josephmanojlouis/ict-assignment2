const express =require('express');
const authorRouter =express.Router();
function router(nav){
    var authors=[
        {
            Name:'Joseph Barbera',
            born:'24 March 1911',
            country:'United States',
            img:'barbera.jpg'
        },
        {
            Name:'J.K Rowling',
            born:'31 July 1965',
            country:'United Kingdom',
            img:'jk.jpg'
        },
        {
            Name:'Vaikom Muhammed Basheer',
            born:'21 January 1908',
            country:'Kerala,India',
            img:'vaikom.jpg'
        }
    ]
    
    authorRouter.get('/',function(req,res){
        res.render('authors',{
            nav,
        title:'Library',
        authors
    
        });
    });
    
    authorRouter.get('/:id',function(req,res){
        const id =req.params.id
        res.render('author',{
            nav,
            title:'Library',
            author:authors[id]
        });
    });

    return authorRouter;
    

}


module.exports=router;