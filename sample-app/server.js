// 起動遅延（ミリ秒）
const startupDelay = process.env.STARTUP_DELAY || 10000;

const http = require('http');

const requestHandler = (request, response) => {
    if (request.url === '/health') {
        response.end('OK');
        return;
    }
    console.log(request.url);
    response.end('Hello Node.js Server!');
};

const server = http.createServer(requestHandler);

setTimeout(() => {
    server.listen(8080, (err) => {
        if (err) {
            return console.log('something bad happened', err);
        }
        console.log(`server is listening on 8080`);
    });
    }, startupDelay);
