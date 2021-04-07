const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDatabase = require('./src/config/database');
const cors = require('cors');
const dotenv = require('dotenv');

//Condigure enviroment
dotenv.config({ path: 'src/config/config.env' })



//MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());


//Importing Routes
//const transportRequestsRoute = require('./src/routes/transportRequest');
const emergencyRoute = require('./src/routes/emergency');


//Using Routes
//app.use('/transportRequest', transportRequestsRoute);
app.use('/emergency', emergencyRoute);


//Routes
app.get('/', (req, res) => {
    res.send('Hello');
})

app.post('/', (req, res) => {
    console.log(JSON.stringify(req.body))
})


//connect to database
connectDatabase();


app.listen(3001);
