import express from 'express';
import bodyParser from 'body-parser'; //middleware

import * as db from './utils/DataBaseUtils.js';
import config from './config/index.js';

// npx babel-node --debug --presets es2015 -- server/app.js --debug

db.setUpConnection(); // подключаемся к базе данных

const app = express();

app.use( bodyParser.json() );

app.get('/lists', (req, res) => {
    db.getLists().then( data => res.send(data) );
});

app.post('/lists', (req, res) => {
    db.createListItem(req.body).then( data => res.send(data) );
});

app.delete('/lists/:id', (req, res) => {
    db.deleteListItem(req.params.id).then( data => res.send(data) );
});

const server = app.listen(config.serverPort, () => {
    console.log(`Server is up and running on port ${config.serverPort}`);
});