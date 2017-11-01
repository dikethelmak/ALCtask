var express = require('express');
// var mongoose = require('mongoose');
var restful = require('node-restful');
var mongoose = restful.mongoose;
var bodyParser = require('body-parser');

//mongoDB
// mongoose.connect('mongodb://localhost/crudapp',
// {useMongoClient: true}
// );
// var db = mongoose.connection;
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/crudapp');

// Using `mongoose.connect`...
mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost/myapp', {
    useMongoClient: true
    /* other options */
  });
 
//express
app = new express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.query());

var Student = app.resourse = restful.model('student', mongoose.Schema({
    name :'string',
    reg_number :'string',
    dept : 'string',
    gender : 'string'
}))
    .methods(['get','post','put','delete']);

    Student.register(app, '/students');


//routes
app.get('/', function (req, res){
    res.send('working');
});

//start server
app.listen(3000);
console.log('App started on port 3000');