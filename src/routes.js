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
    const {id, name, cuisine, phone, price} = req.query;
    const INSERT_FOOD = 'INSERT INTO food VALUES (\'' + id + '\',\''+ name + '\', \'' + cuisine + '\',\'' + phone + '\',' + price + ');';
    connection.query(INSERT_FOOD, (error, results) => {
       if (error) console.log("Adding Error");
    });
});

app.get('/food/delete', (req, res) => {
    const { id } = req.query;
    const FIND_FOOD = 'SELECT * FROM food WHERE id = \'' + id + '\'';
    const DELETE_FOOD = 'DELETE FROM food WHERE id = \'' + id + '\'';
    connection.query(FIND_FOOD, (error, results) => {
        if (results.length > 0) {
            connection.query(DELETE_FOOD, (error) => {
                res.send("Successfully deleted your information.");
            });
        }
        else {
            res.send("Incorrect ID. Try again!");
        }
    })
});

app.get('/cake/add', (req, res) => {
    const {id, name, price, phone, size} = req.query;
    const INSERT_FOOD = 'INSERT INTO cake VALUES (\'' + id + '\',\''+ name + '\', ' + price + ',\'' + phone + '\',' + size + ');';
    connection.query(INSERT_FOOD, (error, results) => {
        if (error) console.log(INSERT_FOOD + "\n" + "Adding Error");
    });
});

app.get('/cake/delete', (req, res) => {
    const { id } = req.query;
    const FIND_FOOD = 'SELECT * FROM cake WHERE id = \'' + id + '\'';
    const DELETE_FOOD = 'DELETE FROM cake WHERE id = \'' + id + '\'';
    connection.query(FIND_FOOD, (error, results) => {
        if (results.length > 0) {
            connection.query(DELETE_FOOD, (error) => {
                res.send("Successfully deleted your information.");
            });
        }
        else {
            res.send("Incorrect ID. Try again!");
        }
    })
});

app.listen(4000, () => {
    console.log('http://localhost:4000/food');
});

//module.export = connection;


