const http = require('http');

http.createServer( (req, res) => {
    res.setHeader('Content-Disposition', 'atachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'aplication/csv' } )

    
    const persona = {
        id: 1,
        name: 'Alex',
    }   

    res.write( 'id, nombre\n' )
    res.write( '1, Fer\n' )
    res.write( '2, Alex\n' )
    res.write( '3, Alex\n' )
    res.write( '4, Alex\n' )
    res.end();
    
})

.listen( 8080 );

console.log('listening on port', 8080)