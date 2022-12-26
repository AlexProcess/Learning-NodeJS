const http = require('http');

http.createServer( (req, res) => {
    // res.setHeader('Content-Disposition', 'atachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'aplication/csv' } )

    
    const persona = {
        id: 1,
        name: 'Alex',
    }   

    res.write( 'Hola mundo' )

    res.end();
    
})

.listen( 8080 );

console.log('listening on port', 8080)