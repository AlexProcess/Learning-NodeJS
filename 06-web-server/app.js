const express = require('express');
const port = 8080;
const app = express();

// Servir contenido estatico
app.use( express.static('public') );


app.get('/',  (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/generic',  (req, res) => {
  res.sendFile(__dirname + '/public/generic.html');

});
app.get('/elements',  (req, res) => {
  res.sendFile(__dirname + '/public/elements.html');
});



// app.get('/hola-mundo',  (req, res) => {
//   res.send('Hopla mundo en su respectiva ruta')
// });

// app.get('/*',  (req, res) => {
//   res.sendFile(__dirname + '/public/404.html')
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
