const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const index = express();

index.use(bodyParser.json());
index.use(bodyParser.urlencoded({ extended: false }));

const app = index.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );

    // Request headers you wish to allow
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type'
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const PORT = process.env.PORT || config.port;

app.get("/get_all_policies", (req, res) => { 
    res.send("Hello world")
    }
);

const server = app.listen(PORT, () => {
    console.log('server is running on port', server.address().port);
});

