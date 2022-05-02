const express = require('express');
const app = express();
const path = require('path');
const hbs= require('hbs');
const port = 8000;
// const port =process.env.PORT ||8000;


// static path for html file
let staticpath=path.join(__dirname,'../public');
let template_path=path.join(__dirname,'../templates/views');
let partialLink=path.join(__dirname,'../templates/partials');
console.log(template_path)
// console.log(staticpath) ;
//view engine to use route dynamically
app.set('view engine','hbs');
app.set("views",template_path); 
 hbs.registerPartials(partialLink);
// console.log(staticpath) // to comfirm the path 
app.use(express.static(staticpath));

//  express routing 
app.get("",(req, res) => {
    res.render('index');
})
app.get("/about",(req, res) => {
   res.render('about');
})
app.get("/weather",(req, res) => {
    res.render('weather');
})
app.get("*",(req, res) => {
    res.render('404error',{
        errmsg: 'opps page not found'
    });
    // res.send(res.status(404).send("404 error not found"));
})

app.listen(port,() =>{
    console.log(`connected successfully ${port}`);
});