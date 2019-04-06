const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/data'){
        fs.writeFile('Static.txt','This is the data I want tnjknkjo write', err => {
            if(!err){
                console.log('Success');
            }
        }
        )
        const readStream = fs.createReadStream('index.html');
        res.writeHead(200,{'Content-type' : 'text/html'});
        readStream.pipe(res);
    }

});

server.listen(9999, 'localhost');