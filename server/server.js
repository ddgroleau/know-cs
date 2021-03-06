// --- MODULES/DEPENDENCIES ---
const express = require('express');
const dotenv = require('dotenv').config('.env');
const bodyParser = require('body-parser');
const Router = express.Router();
const { response, request } = require('express');
const endpoint = require('./endpoint');
const path = require('path');
const { root } = require('npm');

// EXPRESS
const app = express();
const port = process.env.PORT || 3080
app.listen(port, () => console.log(`Server started at Port: ${port}`));
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json({limit: '1mb'}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', endpoint);

app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname.replace("/server", ""), "../client/build"));
});
console.log(__dirname.replace("/server", ""));


// Error Handling 
app.use((request, response) => {
    const error = new Error('There was an issue. Please try again');
    error.status = 404;
    response.send(error);
});

app.use((error, request, response) => {
response.status(error.status || 500);
response.json({
    error: {
        message: error.message
    }
});
});