const express = require('express');

const app = express();
const port =process.env.PORT || 5001;
const nav = [
    { link: '/books', name: 'Books' },
    { link: '/authors', name: 'Authors' },
    {link: '/signUp',name: 'Signup'},
    {link: '/admin',name :'Add Book'}
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter=require('./src/routes/authorRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);


app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');
app.use('/books', booksRouter);
app.use('/authors',authorRouter);
app.use('/admin',adminRouter);
app.use('/signUp',signupRouter);


app.get('/', function (req, res) {
    res.render('index', {
        nav,
        title: 'Library'
    });
});





app.listen(port,()=>{
    console.log('Server Ready at ' + port)
});