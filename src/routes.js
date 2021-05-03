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

app.get('/food/find', (req, res) => {
    const { id } = req.query;
    const FIND_FOOD = 'SELECT * FROM food WHERE id = \'' + id + '\';'
    connection.query(FIND_FOOD, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/food/update', (req, res) => {
    const { id, name, cuisine, phone, price } = req.query;
    const UPDATE_FOOD = 'UPDATE food SET id = \'' + id
        + '\', name = \''+ name
        + '\', cuisine = \'' + cuisine
        + '\', phone = \'' + phone
        + '\', price = ' + price
        + ' WHERE id = \'' + id + '\';';
    connection.query(UPDATE_FOOD, (error, results) => {
       if (!error)  console.log("Updated successfully")
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

app.get('/cake/find', (req, res) => {
    const { id } = req.query;
    const FIND_CAKE = 'SELECT * FROM cake WHERE id = \'' + id + '\';'
    connection.query(FIND_CAKE, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/cake/update', (req, res) => {
    const { id, name, size, phone, price } = req.query;
    const UPDATE_CAKE = 'UPDATE cake SET id = \'' + id
        + '\', name = \''+ name
        + '\', size = \'' + size
        + '\', phone = \'' + phone
        + '\', price = ' + price
        + ' WHERE id = \'' + id + '\';';
    connection.query(UPDATE_CAKE, (error, results) => {
        if (!error)  console.log("Updated successfully")
    })
});

app.get('/dress/add', (req, res) => {
    const {id, name, style, price, phone} = req.query;
    const INSERT_DRESS = 'INSERT INTO dress VALUES (\'' + id + '\',\''+ name + '\', \'' + style + '\', ' + price + ',\'' + phone + '\'' + ');';
    connection.query(INSERT_DRESS, (error, results) => {
        if (error) console.log(INSERT_DRESS + "\n" + "Adding Error");
    });
});

app.get('/dress/delete', (req, res) => {
    const { id } = req.query;
    const FIND_DRESS = 'SELECT * FROM dress WHERE id = \'' + id + '\'';
    const DELETE_DRESS = 'DELETE FROM dress WHERE id = \'' + id + '\'';
    connection.query(FIND_DRESS, (error, results) => {
        if (results.length > 0) {
            connection.query(DELETE_DRESS, (error) => {
                res.send("Successfully deleted your information.");
            });
        }
        else {
            res.send("Incorrect ID. Try again!");
        }
    })
});

app.get('/dress/find', (req, res) => {
    const { id } = req.query;
    const FIND_DRESS = 'SELECT * FROM dress WHERE id = \'' + id + '\';'
    connection.query(FIND_DRESS, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/dress/update', (req, res) => {
    const { id, name, style, phone, price } = req.query;
    const UPDATE_DRESS = 'UPDATE dress SET id = \'' + id
        + '\', name = \''+ name
        + '\', style = \'' + style
        + '\', phone = \'' + phone
        + '\', price = ' + price
        + ' WHERE id = \'' + id + '\';';
    connection.query(UPDATE_DRESS, (error, results) => {
        if (!error)  console.log("Updated successfully")
    })
});

app.get('/entertainment/add', (req, res) => {
    const {id, name, price, phone, type} = req.query;
    const INSERT_ENTERTAINMENT = 'INSERT INTO entertainment VALUES (\'' + id + '\',\''+ name + '\', ' + price + ',\'' + phone + '\',' + type + ');';
    connection.query(INSERT_ENTERTAINMENT, (error, results) => {
        if (error) console.log(INSERT_ENTERTAINMENT + "\n" + "Adding Error");
    });

});app.get('/entertainment/delete', (req, res) => {
    const { id } = req.query;
    const FIND_ENTERTAINMENT = 'SELECT * FROM entertainment WHERE id = \'' + id + '\'';
    const DELETE_ENTERTAINMENT = 'DELETE FROM entertainment WHERE id = \'' + id + '\'';
    connection.query(FIND_ENTERTAINMENT, (error, results) => {
        if (results.length > 0) {
            connection.query(DELETE_ENTERTAINMENT, (error) => {
                res.send("Successfully deleted your information.");
            });
        }
        else {
            res.send("Incorrect ID. Try again!");
        }
    })
});

app.get('/entertainment/find', (req, res) => {
    const { id } = req.query;
    const FIND_ENTERTAINMENT = 'SELECT * FROM entertainment WHERE id = \'' + id + '\';'
    connection.query(FIND_ENTERTAINMENT, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/entertainment/update', (req, res) => {
    const { id, name, type, phone, price } = req.query;
    const UPDATE_ENTERTAINMENT = 'UPDATE entertainment SET id = \'' + id
        + '\', name = \''+ name
        + '\', type = \'' + type
        + '\', phone = \'' + phone
        + '\', price = ' + price
        + ' WHERE id = \'' + id + '\';';
    connection.query(UPDATE_ENTERTAINMENT, (error, results) => {
        if (!error)  console.log("Updated successfully")
    })
});

app.get('/venue/add', (req, res) => {
    const {id, name, capacity, landscape, price, phone, zipcode} = req.query;
    const INSERT_VENUE = 'INSERT INTO venue VALUES (\'' + id
        + '\',\''+ name
        + '\',' + capacity
        + ',\''+ landscape
        + '\', ' + price
        + ',\'' + phone
        + '\',' + zipcode + ');';
    connection.query(INSERT_VENUE, (error, results) => {
        if (error) console.log(INSERT_VENUE + "\n" + "Adding Error");
    });

});app.get('/venue/delete', (req, res) => {
    const { id } = req.query;
    const FIND_VENUE = 'SELECT * FROM venue WHERE id = \'' + id + '\'';
    const DELETE_VENUE = 'DELETE FROM venue WHERE id = \'' + id + '\'';
    connection.query(FIND_VENUE, (error, results) => {
        if (results.length > 0) {
            connection.query(DELETE_VENUE, (error) => {
                res.send("Successfully deleted your information.");
            });
        }
        else {
            res.send("Incorrect ID. Try again!");
        }
    })
});

app.get('/venue/find', (req, res) => {
    const { id } = req.query;
    const FIND_VENUE = 'SELECT * FROM venue WHERE id = \'' + id + '\';'
    connection.query(FIND_VENUE, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/venue/update', (req, res) => {
    const { id, name, capacity, landscape, price, phone, zipcode } = req.query;
    const UPDATE_VENUE = 'UPDATE venue SET id = \'' + id
        + '\', name = \''+ name
        + '\', capacity = \'' + capacity
        + '\', landscape = \''+ landscape
        + '\', price = \'' + price
        + '\', phone = \'' + phone
        + '\', zipcode = \'' + zipcode
        + '\' WHERE id = \'' + id + '\';';
    connection.query(UPDATE_VENUE, (error, results) => {
        if (!error)  console.log("Updated successfully")
        if (error) console.log(UPDATE_VENUE + "\n" + "Adding Error");

    })
});

app.listen(4000, () => {
    console.log('http://localhost:4000/food');
});

//module.export = connection;


