const http = require('http');

http.createServer( (request, res) => {
    res.writable('Hola mundo')
    
    
    
})

.listen( 8080 );

console.log('listening on port', 8080)