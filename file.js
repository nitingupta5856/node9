
const path=require('path');
const express =require("express");

const bodyParser=require("body-parser");
const app = express();
const admin =require("./routes/admin");
const shop =require("./routes/shop");
const contact=require("./routes/contact")
const success=require("./routes/success")
app.use(bodyParser.urlencoded({ extended: true }));
const errorPage =require('./controllers/error')


app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',admin);
app.use(shop);
app.use(contact);
app.use(success);

// app.use('/',(req,res,next)=>{
//     console.log("this always run");
//     next();
    
//     })


app.use(errorPage.get404Page)

 

       


app.listen(7000);
