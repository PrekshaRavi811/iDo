const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const SELECT_ALL_FOOD = "select * from food;";

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
    else {
        console.log("CONNECTED TO SERVER");
    }
});

app.get('/food', (req, res) => {
    connection.query(SELECT_ALL_FOOD, (error, results, fields) => {
        if (error) console.log(error);
        res.json ({
            data: results
        });
    });
});

app.get('/food/add', (req, res) => {
    const {name, cuisine, phone, price} = req.query;
    const INSERT_FOOD = 'INSERT INTO food VALUES (\''+ name + '\', \'' + cuisine + '\',' + phone + ',' + price + ')';
    connection.query(INSERT_FOOD, (error, results) => {
       if (error) console.log(error);
       res.send("SUCCESSFULLY ADDED DETAILS of ' + !");
    });
})

app.listen(4000, () => {
    console.log('http://localhost:4000/food');
});

//module.export = connection;


