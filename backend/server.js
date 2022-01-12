const keys = require('./keys');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;

// Server
const app = express();

// noinspection JSCheckFunctionSignatures
app.use(cors());
app.use(bodyParser.json());

// DB
const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});

pgClient.on("connect", client => {
    client
        .query("CREATE TABLE IF NOT EXISTS values (number INT)")
        .catch(err => console.log(err));
})


// ROUTES
app.get("/", (req, res) => {
    res.send("This is bobby backend");
});

app.get("/values/all", async(req, res) => {
    const values = await pgClient.query("SELECT * FROM values");
    res.send(values.rows);
});

app.post("/value", async(req, res) => {
    if (!req.body.value) {
        res.send({working: false});
    }
    pgClient.query("INSERT INTO values(number) VALUES($1)", [req.body.value]);
    res.send({working: true});
});


// START
app.listen(port, () => {
    console.log(`Backend bobby listening at http://localhost:${port}`);
});
