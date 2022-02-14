const express = require('express');
const bodyParser = require('body-parser');
const sqldb = require('./config.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.statuscode(200).send("Hello World");

})

app.listen(8000,function(){
    console.log("server has started ");
})
