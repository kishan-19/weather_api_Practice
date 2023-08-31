require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn.js");
const weatherModel = require("./models/weatherschema.js");
const dropCity = require('./routers/dropCity.js');
const getData = require('./routers/getData.js');
const postData = require('./routers/postData.js');
const updateTemp =require('./routers/updateTemp.js');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(postData);
app.use(dropCity);
app.use(getData);
app.use(updateTemp)


app.listen(port, () => {
    console.log(`listening on ${port}`);
})
