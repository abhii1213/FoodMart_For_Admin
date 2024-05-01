const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

//env config
dotenv.config();

//router import
const displayFoodData = require('./routes/displayFoodData.js')

//mongodb connection
connectDB();

//rest objecct
const app = express();

// Allow requests from your React app's origin
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // This allows cookies to be sent with the request
};

// middlewares
// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//routes
app.use('/api/v1/foods', displayFoodData)


// Port
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT, () => {
  console.log(
    `Server Running on  portt no ${PORT}`
  );
});