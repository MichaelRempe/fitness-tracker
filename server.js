//*******DEPENDENCIES*********************************************************************************//
const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const dbconfig = require("./app/db/config")

//*******APP-CONFIG***********************************************************************************//
const PORT = process.env.PORT ||8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  // locate static directory
app.use(express.static("public"));

//*******ROUTES --> Router ***********************************************************************************//
app.use('/api/activity', require('./app/routes/exercise'))

// STUDENTS: REGISTER ROUTES TO HANDLE WORKOUT AND EXERCISE API CALLS

//**********SYNC-DB***********************************************************************************//
//Connect DB and open server PORT
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongofitness", dbconfig.settings);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
