const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema =mongoose.Schema;

const SignupSchema =new Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
});

var Signupdata=mongoose.model('signupdata',SignupSchema);

module.exports= Signupdata;