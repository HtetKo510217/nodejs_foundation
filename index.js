/* 
let http = require('http');

let app = http.createServer((req,res)=> {

    if(req.url === '/') {
        res.end('Welcome to home page');
    }else if(req.url === '/about') {
        res.end('Welcome to about page')
    }else {
        res.end('page not found !!!!');
    }

})


app.listen(3000,()=>{console.log('server is running at port 3000')})

*/

let express = require('express');
let app = express();
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))


app.get('/',(req,res)=> {
    res.end(`
    
    <h1>Welcome </h1>
    <p>What color is the sky on a clear and sunny day?</p>
    <form action='/answer' method='POST'>
        <input name='skyColor' autocomplete="off">
        <button>Answer</button>
    </form>
    
    `);
})

app.post('/answer',(req,res)=> {
    if(req.body.skyColor.toUpperCase() === 'BLUE') {
        res.end(`
        <p>Congrats, that is corret answer !</p>
        <a href="/">Back to homepage</a>
        `)
    }else {
        res.end(`
        <p>Sorry that is incorrect  !!</p>
        <a href="/">Back to homepage</a>
        `)
    }
})

app.get('/answer',(req,res)=> {
    res.end(`
        <p>Are you lost ? There is nothing to see here.</p>
        <a href="/">Back to homepage</a>
        `)
})

app.listen(3000,()=>{console.log('Server is running at port 3000')});