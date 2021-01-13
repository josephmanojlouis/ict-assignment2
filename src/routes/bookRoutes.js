const express =require('express');
const booksRouter =express.Router();
const Bookdata =require('../model/Bookdata');
function router(nav){
    // var books=[
    //     {
    //         title:'Tom and Jerry',
    //         author:'Joseph Barbera',
    //         genre:'Cartoon',
    //         img:'tom.jpg'
    //     },
    //     {
    //         title:'Harry Porter',
    //         author:'J K Rowling',
    //         genre:'Fantasy',
    //         img:'harry.jpg'
    //     },
    //     {
    //         title:'Pathummayuda Aadu',
    //         author:'Vaikom Muhammed Basheer',
    //         genre:'Drama',
    //         img:'basheer.png'
    //     }
    // ]
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render('books',{
                nav,
            title:'Library',
            books
        
            });

        })
       
    });
    
    booksRouter.get('/:id',function(req,res){
        const id =req.params.id
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book
            });

        })
       
    });
    booksRouter.get('/ad/d/addbook',function(req,res){
        res.render("addbook",
                {
                    nav,
                    title:'Add Book'
                });
            });
    booksRouter.get('/edit/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
            console.log(book);
            res.render('edit',{
                    nav,
                    title:'Update',
                    book
                });
            })

    });

    
    booksRouter.post('/update/:id',  function(req,res){
        const id=req.params.id
       
        const item={
            title:req.body.title,
            genre:req.body.genre,
            author:req.body.author,
            img:req.body.img
        }
        console.log(item);
        Bookdata.findByIdAndUpdate({_id:id},{$set:item},function () {
            res.redirect("/books");
            
        });

    });

    booksRouter.get('/l/t/:id',function(req,res){
        const id=req.params.id
        Bookdata.findByIdAndDelete({_id:id},function () {
                res.redirect("/books");
            })

    });

    return booksRouter;
    

}


module.exports=router;