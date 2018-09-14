const express = require('express');

const app = express();
app.use(express.urlencoded({extended: false}));

const cats = [
    {
        "name": "Node.js",
        "age": 1
    },
    {
        "name": "Python",
        "age": 2
    },
];

app.get('/', (req, res) => {
    res.send('REST API');
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
