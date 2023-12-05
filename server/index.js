const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const {CORS_ORIGIN} = process.env;

//middleware
app.use(express.json());
app.use(cors({origin: CORS_ORIGIN})); 

//db
mongoose.connect('mongodb://127.0.0.1:27017/test');

const todoRoute = require('./routes/todoRoute');

//routes
app.use('/todo', todoRoute);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });