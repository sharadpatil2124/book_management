const express = require('express');
const bodyParser = require('body-parser');
const routesAPI = require('./routes/api');
const { connectdb } = require('./config/db');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

connectdb();

app.use('/api',routesAPI);

app.listen(5000,()=>{
    console.log('server started');
})

