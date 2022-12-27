const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 8080;




// HandleBars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estatico
app.use( express.static('public') );




app.get('/',  (req, res) => {
  res.render('home',{
  nombre: 'Alex',
  titulo: 'Curso NodeJs'
})
  
});

app.get('/generic',  (req, res) => {
  res.render('generic', {
    Alex: '',
    titulo:'Curso node'
});

});
app.get('/elements',  (req, res) => {
  res.render('elements', {
    Alex: '',
    titulo:'Curso node'
});

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
