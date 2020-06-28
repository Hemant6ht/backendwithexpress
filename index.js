const express = require('express');
const app = express();
const ejs = require('ejs');
const path =require('path')
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.get('/',(req,res) => {
    res.render('home');
});
app.get('/about',(req,res) => {
    res.render('about');
});
app.get('/form_post',(req,res) => {
    res.render('form_post');
});
app.post('/handle_name',(req,res) => {
    var ans=req.body.username;
    ans=ans.split('').reverse().join('');
    var data={key:ans}
   res.send(data);
});

app.listen(5000,()=>{console.log("started serving")});