const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 1234;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario_de_mysql',
  password: 'tu_contraseña_de_mysql',
  database: 'compra_venta_portal'
});
/*
db.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos MySQL:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
/*
app.get('/items', (req, res) => {
  const sql = 'SELECT * FROM items';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error obteniendo los artículos:', err);
      res.status(500).send('Error obteniendo los artículos');
      return;
    }
    res.json(results);
  });
});
*//*
app.post('/items', (req, res) => {
  const newItem = {
    name: req.body.name,
    price: req.body.price
  };

  const sql = 'INSERT INTO items SET ?';

  db.query(sql, newItem, (err, result) => {
    if (err) {
      console.error('Error guardando el artículo:', err);
      res.status(500).send('Error guardando el artículo');
      return;
    }
    console.log('Artículo guardado en la base de datos:', result);
    res.redirect('/');
  });
});
*/
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
