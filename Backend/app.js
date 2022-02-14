const express = require('express');
const bodyParser = require('body-parser');
var db = require('./config');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
var insertOptions = {force: false};
db.sequelize.sync(insertOptions).then(result => {
    //console.log("Database Sync Result: " + printObject(result));
    console.log("Database Sync Result: " + result);

}).catch(err => {
    console.log("Database Sync Error: " + err);
});

app.get('/', (req, res) => {
    res.statuscode(200).send("Hello World");

})

app.listen(8000,function(){
    console.log("server has started ");
})
