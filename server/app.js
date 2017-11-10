const express = require('express');

//middleware
const bodyParser = require('body-parser');

const router = require('./routes.js');


const app = express();

app.use(bodyParser.json());
app.use(router);

let port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));