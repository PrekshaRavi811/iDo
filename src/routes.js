const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const SELECT_ALL_FOOD = "select * from food;"
const SELECT_ALL_GUEST = "select * from guests;"
const SELECT_ALL_CAKE = "select * from cake;"
const SELECT_ALL_ENTERTAINMENT = "select * from entertainment;"
const SELECT_ALL_DRESS = "select * from dress;"
const SELECT_ALL_VENUE = "select * from venue;"
const ISOLATION_LEVEL_RC = "SET TRANSACTION ISOLATION LEVEL READ COMMITTED;";
const ISOLATION_LEVEL_RU = "SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;";
const TRANSACTION_START = "START TRANSACTION;";
const TRANSACTION_COMMIT = "COMMIT;";

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
    const INSERT_FOOD = 'INSERT INTO food VALUES (\'' + id + '\',\''+ name + '\', \'' + cuisine
                        + '\',\'' + phone + '\',' + price + ');';
    connection.query(ISOLATION_LEVEL_RC, (error, results) => {
       if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
       connection.query(TRANSACTION_START, (error, results) => {
           if (error) console.log("START ERROR\n" + TRANSACTION_START);
           connection.query(INSERT_FOOD, (error, results) => {
                if (error) console.log("Adding Error\n" + INSERT_FOOD);
                connection.query(TRANSACTION_COMMIT, (error, results) => {
                    if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                });
           });
        });
    });
});

app.get('/food/delete', (req, res) => {
    const { id } = req.query;
    const FIND_FOOD = 'SELECT * FROM food WHERE id = \'' + id + '\'';
    const DELETE_FOOD = 'DELETE FROM food WHERE id = \'' + id + '\'';
    connection.query(FIND_FOOD, (error, results) => {
        if (results.length > 0) {
            connection.query(ISOLATION_LEVEL_RU, (error, results) => {
                if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
                connection.query(TRANSACTION_START, (error, results) => {
                    if (error) console.log("START ERROR\n" + TRANSACTION_START);
                    connection.query(DELETE_FOOD, (error, results) => {
                        if (error) console.log("Adding Error\n" + DELETE_FOOD);
                        connection.query(TRANSACTION_COMMIT, (error, results) => {
                            if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                            if (!error) res.send("Successfully deleted your information.");

                        });
                    });
                });
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
    connection.query(ISOLATION_LEVEL_RC, (error, results) => {
        if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
        connection.query(TRANSACTION_START, (error, results) => {
            if (error) console.log("START ERROR\n" + TRANSACTION_START);
            connection.query(UPDATE_FOOD, (error, results) => {
                if (error) console.log("Adding Error\n" + UPDATE_FOOD);
                connection.query(TRANSACTION_COMMIT, (error, results) => {
                    if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                });
            });
        });
    });
});

app.get('/food/getName', (req, res) => {
    const { name } = req.query;
    const FIND_NAME = 'SELECT * FROM food WHERE name = ' + name;
    connection.query(FIND_NAME, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/food/getCuisine', (req, res) => {
    const { cuisine } = req.query;
    const FIND_CUISINE = 'SELECT * FROM food WHERE cuisine = ' + cuisine;
    connection.query(FIND_CUISINE, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/food/sortPrice', (req, res) => {
    const { name } = req.query;
    const SORT_QUERY = 'SELECT * FROM food order by price';
    connection.query(SORT_QUERY, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/cake', (req, res) => {
    connection.query(SELECT_ALL_CAKE, (error, results, fields) => {
        if (error) console.log(error);
        res.json ({
            data: results
        });
    });
});

app.get('/cake/add', (req, res) => {
    const {id, name, price, phone, size} = req.query;
    const INSERT_CAKE = 'INSERT INTO cake VALUES (\'' + id + '\',\''+ name + '\', ' + price + ',\'' + phone + '\',' + size + ');';
    connection.query(ISOLATION_LEVEL_RC, (error, results) => {
        if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
        connection.query(TRANSACTION_START, (error, results) => {
            if (error) console.log("START ERROR\n" + TRANSACTION_START);
            connection.query(INSERT_CAKE, (error, results) => {
                if (error) console.log("Adding Error\n" + INSERT_CAKE);
                connection.query(TRANSACTION_COMMIT, (error, results) => {
                    if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                });
            });
        });
    });
});

app.get('/cake/delete', (req, res) => {
    const { id } = req.query;
    const FIND_CAKE = 'SELECT * FROM cake WHERE id = \'' + id + '\'';
    const DELETE_CAKE = 'DELETE FROM cake WHERE id = \'' + id + '\'';
    connection.query(FIND_CAKE, (error, results) => {
        if (results.length > 0) {
            connection.query(ISOLATION_LEVEL_RU, (error, results) => {
                if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
                connection.query(TRANSACTION_START, (error, results) => {
                    if (error) console.log("START ERROR\n" + TRANSACTION_START);
                    connection.query(DELETE_CAKE, (error, results) => {
                        if (error) console.log("Adding Error\n" + DELETE_CAKE);
                        connection.query(TRANSACTION_COMMIT, (error, results) => {
                            if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                            if (!error) res.send("Successfully deleted your information.");

                        });
                    });
                });
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
    connection.query(ISOLATION_LEVEL_RC, (error, results) => {
        if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
        connection.query(TRANSACTION_START, (error, results) => {
            if (error) console.log("START ERROR\n" + TRANSACTION_START);
            connection.query(UPDATE_CAKE, (error, results) => {
                if (error) console.log("Adding Error\n" + UPDATE_CAKE);
                connection.query(TRANSACTION_COMMIT, (error, results) => {
                    if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                });
            });
        });
    });
});

app.get('/cake/getName', (req, res) => {
    const { name } = req.query;
    const FIND_NAME = 'SELECT * FROM cake WHERE name = ' + name;
    connection.query(FIND_NAME, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/cake/getSize', (req, res) => {
    const { size } = req.query;
    const FIND_SIZE = 'SELECT * FROM cake WHERE size = ' + size;
    connection.query(FIND_SIZE, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/cake/sortPrice', (req, res) => {
    const { name } = req.query;
    const SORT_QUERY = 'SELECT * FROM cake order by price';
    connection.query(SORT_QUERY, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/dress', (req, res) => {
    connection.query(SELECT_ALL_DRESS, (error, results, fields) => {
        if (error) console.log(error);
        res.json ({
            data: results
        });
    });
});

app.get('/dress/add', (req, res) => {
    const {id, name, style, price, phone} = req.query;
    const INSERT_DRESS = 'INSERT INTO dress VALUES (\'' + id + '\',\''+ name + '\', \'' + style + '\', ' + price + ',\'' + phone + '\'' + ');';
    connection.query(ISOLATION_LEVEL_RC, (error, results) => {
        if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
        connection.query(TRANSACTION_START, (error, results) => {
            if (error) console.log("START ERROR\n" + TRANSACTION_START);
            connection.query(INSERT_DRESS, (error, results) => {
                if (error) console.log("Adding Error\n" + INSERT_DRESS);
                connection.query(TRANSACTION_COMMIT, (error, results) => {
                    if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                });
            });
        });
    });
});

app.get('/dress/delete', (req, res) => {
    const { id } = req.query;
    const FIND_DRESS = 'SELECT * FROM dress WHERE id = \'' + id + '\'';
    const DELETE_DRESS = 'DELETE FROM dress WHERE id = \'' + id + '\'';
    connection.query(FIND_DRESS, (error, results) => {
        if (results.length > 0) {
            connection.query(ISOLATION_LEVEL_RU, (error, results) => {
                if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
                connection.query(TRANSACTION_START, (error, results) => {
                    if (error) console.log("START ERROR\n" + TRANSACTION_START);
                    connection.query(DELETE_DRESS, (error, results) => {
                        if (error) console.log("Adding Error\n" + DELETE_DRESS);
                        connection.query(TRANSACTION_COMMIT, (error, results) => {
                            if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                            if (!error) res.send("Successfully deleted your information.");

                        });
                    });
                });
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
    connection.query(ISOLATION_LEVEL_RC, (error, results) => {
        if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
        connection.query(TRANSACTION_START, (error, results) => {
            if (error) console.log("START ERROR\n" + TRANSACTION_START);
            connection.query(UPDATE_DRESS, (error, results) => {
                if (error) console.log("Adding Error\n" + UPDATE_DRESS);
                connection.query(TRANSACTION_COMMIT, (error, results) => {
                    if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                });
            });
        });
    });
});

app.get('/dress/getName', (req, res) => {
    const { name } = req.query;
    const FIND_NAME = 'SELECT * FROM dress WHERE name = ' + name;
    connection.query(FIND_NAME, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/dress/getStyle', (req, res) => {
    const { style } = req.query;
    const FIND_STYLE = 'SELECT * FROM dress WHERE style = ' + style;
    connection.query(FIND_STYLE, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/dress/sortPrice', (req, res) => {
    const { name } = req.query;
    const SORT_QUERY = 'SELECT * FROM dress order by price';
    connection.query(SORT_QUERY, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/entertainment', (req, res) => {
    connection.query(SELECT_ALL_ENTERTAINMENT, (error, results, fields) => {
        if (error) console.log(error);
        res.json ({
            data: results
        });
    });
});

app.get('/entertainment/add', (req, res) => {
    const {id, name, price, phone, type} = req.query;
    const INSERT_ENTERTAINMENT = 'INSERT INTO entertainment VALUES (\'' + id + '\',\''+ name + '\', ' + price + ',\'' + phone + '\',\'' + type + '\');';
    connection.query(ISOLATION_LEVEL_RC, (error, results) => {
        if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
        connection.query(TRANSACTION_START, (error, results) => {
            if (error) console.log("START ERROR\n" + TRANSACTION_START);
            connection.query(INSERT_ENTERTAINMENT, (error, results) => {
                if (error) console.log("Adding Error\n" + INSERT_ENTERTAINMENT);
                connection.query(TRANSACTION_COMMIT, (error, results) => {
                    if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                });
            });
        });
    });

});app.get('/entertainment/delete', (req, res) => {
    const { id } = req.query;
    const FIND_ENTERTAINMENT = 'SELECT * FROM entertainment WHERE id = \'' + id + '\'';
    const DELETE_ENTERTAINMENT = 'DELETE FROM entertainment WHERE id = \'' + id + '\'';
    connection.query(FIND_ENTERTAINMENT, (error, results) => {
        if (results.length > 0) {
            connection.query(ISOLATION_LEVEL_RU, (error, results) => {
                if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
                connection.query(TRANSACTION_START, (error, results) => {
                    if (error) console.log("START ERROR\n" + TRANSACTION_START);
                    connection.query(DELETE_ENTERTAINMENT, (error, results) => {
                        if (error) console.log("Adding Error\n" + DELETE_ENTERTAINMENT);
                        connection.query(TRANSACTION_COMMIT, (error, results) => {
                            if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                            if (!error) res.send("Successfully deleted your information.");

                        });
                    });
                });
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

app.get('/entertainment/getName', (req, res) => {
    const { name } = req.query;
    const FIND_NAME = 'SELECT * FROM entertainment WHERE name = ' + name;
    connection.query(FIND_NAME, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/entertainment/getType', (req, res) => {
    const { type } = req.query;
    const FIND_TYPE = 'SELECT * FROM entertainment WHERE type = ' + type;
    connection.query(FIND_TYPE, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/entertainment/sortPrice', (req, res) => {
    const { name } = req.query;
    const SORT_QUERY = 'SELECT * FROM entertainment order by price';
    connection.query(SORT_QUERY, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/venue', (req, res) => {
    connection.query(SELECT_ALL_VENUE, (error, results, fields) => {
        if (error) console.log(error);
        res.json ({
            data: results
        });
    });
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
    connection.query(ISOLATION_LEVEL_RC, (error, results) => {
        if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
        connection.query(TRANSACTION_START, (error, results) => {
            if (error) console.log("START ERROR\n" + TRANSACTION_START);
            connection.query(INSERT_VENUE, (error, results) => {
                if (error) console.log("Adding Error\n" + INSERT_VENUE);
                connection.query(TRANSACTION_COMMIT, (error, results) => {
                    if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                });
            });
        });
    });

});app.get('/venue/delete', (req, res) => {
    const { id } = req.query;
    const FIND_VENUE = 'SELECT * FROM venue WHERE id = \'' + id + '\'';
    const DELETE_VENUE = 'DELETE FROM venue WHERE id = \'' + id + '\'';
    connection.query(FIND_VENUE, (error, results) => {
        if (results.length > 0) {
            connection.query(ISOLATION_LEVEL_RU, (error, results) => {
                if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
                connection.query(TRANSACTION_START, (error, results) => {
                    if (error) console.log("START ERROR\n" + TRANSACTION_START);
                    connection.query(DELETE_VENUE, (error, results) => {
                        if (error) console.log("Adding Error\n" + DELETE_VENUE);
                        connection.query(TRANSACTION_COMMIT, (error, results) => {
                            if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                            if (!error) res.send("Successfully deleted your information.");
                        });
                    });
                });
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
    connection.query(ISOLATION_LEVEL_RC, (error, results) => {
        if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
        connection.query(TRANSACTION_START, (error, results) => {
            if (error) console.log("START ERROR\n" + TRANSACTION_START);
            connection.query(UPDATE_VENUE, (error, results) => {
                if (error) console.log("Adding Error\n" + UPDATE_VENUE);
                connection.query(TRANSACTION_COMMIT, (error, results) => {
                    if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                });
            });
        });
    });
});

app.get('/venue/getName', (req, res) => {
    const { name } = req.query;
    const FIND_NAME = 'SELECT * FROM venue WHERE name = ' + name;
    connection.query(FIND_NAME, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/venue/getCapacity', (req, res) => {
    const { capacity } = req.query;
    const FIND_CAPACITY = 'SELECT * FROM venue WHERE capacity = ' + capacity;
    connection.query(FIND_CAPACITY, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/venue/getLandscape', (req, res) => {
    const { landscape } = req.query;
    const FIND_LANDSCAPE = 'SELECT * FROM venue WHERE landscape = ' + landscape;
    connection.query(FIND_LANDSCAPE, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/venue/getZipcode', (req, res) => {
    const { zipcode } = req.query;
    const FIND_ZIPCODE = 'SELECT * FROM venue WHERE zipcode = ' + zipcode;
    connection.query(FIND_ZIPCODE, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/venue/sortPrice', (req, res) => {
    const { name } = req.query;
    const SORT_QUERY = 'SELECT * FROM venue order by price';
    connection.query(SORT_QUERY, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/customer/add', (req, res) => {
    const {id, name, email, foodID, dressID, cakeID, venue, entertainment, budget} = req.query;
    const INSERT_CUSTOMER = 'INSERT INTO customer VALUES (\'' + id + '\',\''+ name + '\', \'' + email
        + '\',\'' + foodID + '\',\'' + dressID + '\',\'' + cakeID + '\',\'' + venue + '\',\'' + entertainment + '\','
        + budget + ');';
    connection.query(ISOLATION_LEVEL_RC, (error, results) => {
        if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
        connection.query(TRANSACTION_START, (error, results) => {
            if (error) console.log("START ERROR\n" + TRANSACTION_START);
            connection.query(INSERT_CUSTOMER, (error, results) => {
                if (error) console.log("Adding Error\n" + INSERT_CUSTOMER);
                connection.query(TRANSACTION_COMMIT, (error, results) => {
                    if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                });
            });
        });
    });
});

app.get('/customer/find', (req, res) => {
    const { id } = req.query;
    const FIND_CUSTOMER = 'SELECT * FROM customer WHERE id = \'' + id + '\';'
    connection.query(FIND_CUSTOMER, (error, results) => {
        res.json ({
            data: results
        });
    });
});

app.get('/customer/update', (req, res) => {
    const { id, name, email, foodID, dressID, cakeID, venue, entertainment, budget } = req.query;
    const UPDATE_CUSTOMER = 'UPDATE customer SET id = \'' + id
        + '\', name = \''+ name
        + '\', email = \'' + email
        + '\', foodID = \'' + foodID
        + '\', dressID = \'' + dressID
        + '\', cakeID = \'' + cakeID
        + '\', venue = \'' + venue
        + '\', entertainment = \'' + entertainment
        + '\', budget = ' + budget
        + ' WHERE id = \'' + id + '\';';
    connection.query(ISOLATION_LEVEL_RC, (error, results) => {
        if (error) console.log("Isolation Error\n" + ISOLATION_LEVEL_RC);
        connection.query(TRANSACTION_START, (error, results) => {
            if (error) console.log("START ERROR\n" + TRANSACTION_START);
            connection.query(UPDATE_CUSTOMER, (error, results) => {
                if (error) console.log("Adding Error\n" + UPDATE_CUSTOMER);
                connection.query(TRANSACTION_COMMIT, (error, results) => {
                    if (error) console.log("Commit Error\n" + TRANSACTION_COMMIT);
                });
            });
        });
    });
});

app.listen(4000, () => {
    console.log('http://localhost:4000/food');
});

//module.export = connection;


