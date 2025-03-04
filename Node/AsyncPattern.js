const http = require('http');

const server = http.createServer((req, res)=>{

    if(req.url === '/'){
        res.end('home');
    }

    if(req.url === '/about'){
        //blocking code
        for(let i=0; i<1000; i++){
            for(let j=0; j<1000; j++)
            {
                console.log(`${i}, ${j}`);
            }
        }

        res.end('about');
    }
    res.end('Error page');

})

server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})