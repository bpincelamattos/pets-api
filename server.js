var express = require('express');
var app = express();

//Importing our Pet Routes
const petsRoutes = require ('./routes/owners');

//Middleware
//This is going to capture the request body(req.body), and
//run it through JSON.parse(), returning an object that will
//be available as req.body

app.use(express.json());
//request body has been parsed
app.use(express.urlencoded({ extended: false }));
//request body has been url encoded
;

//Routes - Owners

app.use('/owners', petsRoutes);

app.get('*', (req, res) => {
    res.status(404).send('Not found');
})

app.listen(3001, function(){
    console.log('Pets API is now listening on port 3001...');
})