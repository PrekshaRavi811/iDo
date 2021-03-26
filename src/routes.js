const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const connection = mysql.createConnection({
    host     : '35.188.32.194',
    user     : 'root',
    password : '1234',
    database : 'plan'
});

app.use(cors());

app.get('/', (req, res) => {
    res.send("HELLO");
});

connection.connect(err => {
    if (err) {
        return err;
    }
});

app.get('/food', (req, res) => {
    connection.query("select * from food;", (error, results, fields) => {
        if (error) console.log(error);
        res.json ({
            data: results
        });
    });
});

app.listen(4000, () => {
    console.log('Go to http://localhost:4000/food to see posts');
});

//module.export = connection;


