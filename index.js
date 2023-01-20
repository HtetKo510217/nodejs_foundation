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