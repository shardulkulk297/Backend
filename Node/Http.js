const http = require('http');
const server = http.createServer((req, res)=>{

    if(req.url === '/')
    {
        res.end('Welcome to home page')
        return;
    }

    if(req.url === '/about'){
        res.end('About page')
        return;
    }
    
    res.end(`
        <h1> OOPS! </h1>
        <p> We can't seem to find the page you ARE looking for </p>
        <a href="/">Go back</a>
        `)

})

server.listen(5000);