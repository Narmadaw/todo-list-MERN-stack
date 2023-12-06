const express = require('express');
const cors = require('cors');
require("dotenv").config();
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 5000;
const {CORS_ORIGIN} = process.env;

//middleware
app.use(express.json());
app.use(cors({origin: CORS_ORIGIN})); 

//db
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const todoRoute = require('./routes/todoRoute');

//routes
app.use('/todo', todoRoute);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });