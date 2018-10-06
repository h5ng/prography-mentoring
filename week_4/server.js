const mysql = require('mysql');
const express = require('express');

// express 설정
const app = express();
app.set('views', __dirname);
app.set('view engine', 'pug');
app.use(express.urlencoded({
    extended: false
}));

// mysql 설정
const database = 'prography';
const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database,
});
conn.connect(err => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }

    console.log(`connected as id ${conn.threadId}`);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cats', (req, res) => {
    const sql = 'SELECT * FROM cats;';

    conn.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        res.json(result);
    });
});


app.get('/cats/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM cats WHERE id = ${id}`;
    conn.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        res.json(result);
    });
});


app.post('/cat', (req, res) => {
    const data = req.body;
    const sql = `INSERT INTO cats VALUES(NULL, '${data.name}', ${data.age});`;
    conn.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        res.json(result);
    });
});

app.put('/cat/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const sql = `UPDATE cats SET name = '${data.name}', age = ${data.age} WHERE id = ${id}`;
    conn.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        res.json(result);
    });
});

app.delete('/cat/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM cats WHERE id = ${id};`;
    conn.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        res.json(result);
    });
});

app.get('/sp/cats', (req, res) => {
    const sql = 'CALL CATS()';
    conn.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        res.json(result);
    });
});

app.get('/sp/cats/:id', (req, res) => {
    const id = req.params.id;
    const sql = `CALL CATS_BY_ID(${id})`;
    conn.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        res.json(result);
    });
});

// [회원 정보 가져오기] http://localhost:3000/inj?user=admin'; -- &password=
// [MySQL 정보 가져오기] http://localhost:3000/inj?user=admin' union select @@version,1,1 -- &password=
app.get('/inj', (req, res) => {
    const user = req.query.user;
    const password = req.query.password;
    // const sql = `SELECT * FROM users WHERE user = '${user}' and password = '${password}';`; // escape 처리 X
    const sql = `SELECT * FROM users WHERE user = ${mysql.escape(user)} and password = ${mysql.escape(password)};`; // escape 처리 O
    console.log(sql);
    conn.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        res.json(result);
    });
});

app.listen(3000, () => {
    console.log('app listening on port 3000!');
});