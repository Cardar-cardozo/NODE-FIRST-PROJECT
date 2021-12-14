import { writeFileSync } from 'fs';
const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
    res.write('<head><title>hello</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
    res.write('</html>');
     return res.end('');
    }
    
    if (url === '/message' && method === 'POST' ) {
        const body = [];
        req.on('data', (chunk) => { 
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => { 
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            // console.log(parseBody);
            writeFileSync('message.txt', message, err => {
    
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.write('<html>');
    res.write('<head><title>hello</title></head>');
    res.write('<body><h1>hello</h1></body>');
    res.write('</html>');
    res.end('');
}

export default requestHandler;