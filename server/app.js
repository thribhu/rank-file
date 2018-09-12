
/**
 * server side rendering
 */
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const os = require('os');
//setting port
const __port = 3000; 
const app = express();



/**
 * connection with database
 */

configFiles = require('./config');
app.disable('etag');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, '../src')));
app.set('trust proxy', false);


app.use('/', express.static(path.join(__dirname, 'src')));
if(module === require.main) {
    const server = app.listen(__port, () => {
        const port = server.address().port;
        console.log('app running on ', port); 
    });
}