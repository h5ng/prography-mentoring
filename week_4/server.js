const mysql = require('mysql');
const express = require('express');

// express 설정
const app = express();
app.set('views', __dirname);
app.set('view engine', 'pug');
app.use(express.urlencoded({extended: false}));

// mysql 설정
const database = 'prography';
const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database,
});
conn.connect();

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cats', (req, res) => {
    res.json(cats);
});

app.get('/cats/:id', (req, res) => {
    const id = req.params.id;
    const cat = cats[id - 1];
    res.json(cat);
});

app.post('/cat', (req, res) => {
    const data = req.body;
    cats.push(data);
    res.json(cats);
});

app.put('/cat/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;

    cats[id - 1] = data;
    res.json(cats);
});

app.delete('/cat/:id', (req, res) => {
    const id = req.params.id;
    cats.splice(id - 1, 1);
    res.json(cats);
});

app.listen(3000, () => {
    console.log('app listening on port 3000!');
});

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

