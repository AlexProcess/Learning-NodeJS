const express = require('express');
const port = 8080;
const app = express();

app.get('/',  (req, res) => {
  res.send('Home page')
});

app.get('/hola-mundo',  (req, res) => {
  res.send('Hopla mundo en su respectiva ruta')
});

app.get('/*',  (req, res) => {
  res.send('404 | Page not found')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
