const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// set up express
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({origin:'http://localhost:3000'}))
app.listen(port, () => console.log(`Listening on port ${port}!`))

// set up mongoDB to use madlib database
const mongoDB = 'mongodb://localhost/madlibs';
mongoose.connect(mongoDB, { useNewUrlParser: true });

// connect to mongoDB
const db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection Error!'));

// Make schema and model for the madlib 
const madLibSchema = new mongoose.Schema({
        name: String,
        madLib: []
});

const madLibModel = mongoose.model('MadLib', madLibSchema );

// store the madlib on the database when saved
app.post('/', function (req, res) {
        //save the info to the dabase
        const madLibName = req.query.name;
        const madLibContentList = req.query.data.split('///');
        console.log('name is: ',madLibName);
        console.log('data is: ',madLibContentList);

        var madLibToSave = new madLibModel({
                name: madLibName,
                madLib: madLibContentList
        })
        
        madLidToSave.save((err) => {
                if (err) {
                        console.error(err);
                        res.send({message:"There was an error while saving your madlib in the database!"})
                }
                res.send({message:"Your madlib was saved sucessfully!"});
        });
});

app.get('/', function (req, res) {
        //get the info from the database 
        //and send back a list of the madlibs in the database for display 
        madLibModel.find({},"name",(err,madlibs) => {
                if (err){
                        console.error(err);
                        res.send({message: 'There was an error getting the names from the database!'});
                }

                res.send(madlibs);
        });
});

app.get('/cards', function (req, res) {
        //get the info from the database 
        //and send back the data for the madlib requested
        const name = req.query.name;
        madLibModel.find({name:name},(err,madlib) => {
                if (err){
                        console.erro(err);
                        res.send({message: 'There was an error getting the madlib from the database'})
                }
                console.log(madlib);
                res.send(madlib)
        });
});
