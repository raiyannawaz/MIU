const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const hostname = '127.0.0.1';
const path = require('path')

const viewPath = path.join(__dirname, 'views')

app.set('view engine', 'pug')
app.set('views', viewPath)

app.get('/', (req, res)=>{
    res.render('home', {
        title: "Dance Web"
    })
})

app.get('/contact', (req, res)=>{
    res.render('contact', {
        title: "Dance Web"
    })
})

app.listen(port, hostname, ()=>{
    console.log(`Listening at http://${hostname}:${port}`)
})