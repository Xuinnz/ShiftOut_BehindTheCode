const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.method === 'GET' && req.url === '/hello'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello from backend');
    }
    else if (req.method === 'POST' && req.url === '/greet'){
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () =>{
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(`Hello ${body}, from backend`);
        });
    }
});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
})