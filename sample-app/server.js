const http = require('http');

// 起動遅延（ミリ秒）
const startupDelay = 10000;

const requestHandler = (request, response) => {
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
