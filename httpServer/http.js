const http = require('http');

const port = 9999;
const localhost = 'localhost';

const server = http.createServer((req, res) => {
   if(req.url === '/'){
       res.write('Hello World');
       console.log(req);
       res.end();
   } else if (req.url === '/name/:name') {
       let name = req.params.name;
       console.log(req)
       res.write(`Hello ${name}`);
       res.end();
   }
});

server.listen(port,localhost);

