const http = require('http');

const port = 9999;
const localhost = 'localhost';

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.write('Hello From The Home Page');
            res.end();
            break;
        case '/home':
            res.write('Hello From the Home page');
            res.end();
            break;
        default:
            res.write('Yo');
            res.end()
    }
});

server.listen(port,localhost);

