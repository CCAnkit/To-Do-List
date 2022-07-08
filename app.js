const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
require("dotenv").config();
const { default: mongoose } = require('mongoose');

// routes
const authRoutes = require('./ServerSide/routes/route.js');

// init express app
const app = express();

// parsing the data into JSON format.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  

// View enguine Configuration.
app.set("view engine", "ejs");

app.get('/',(req, res) => { //use GET to pass non-confidential information
  res.render('todo.ejs');
});

const { PORT, MONGODB_URI, NODE_ENV,ORIGIN } = require("./ServerSide/utils/config");
const { API_ENDPOINT_NOT_FOUND_ERR, SERVER_ERR } = require("./ServerSide/utils/errors");

// middlewares
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ORIGIN,
    optionsSuccessStatus: 200,
  })
);

// log in development environment
if (NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

// index route
app.get("/", (req, res) => {
  res.status(200).json({
    type: "success",
    message: "server is up and running",
    data: null,
  });
});

// page not found error handling  middleware
app.use("*", (req, res, next) => {
  const error = {
    status: 404,
    message: API_ENDPOINT_NOT_FOUND_ERR,
  };
  next(error);
});

// global error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 500;
  const message = err.message || SERVER_ERR;
  const data = err.data || null;
  res.status(status).json({
    type: "error",
    message,
    data,
  });
});

// routes middlewares
app.use("/api/auth", authRoutes);


// Database Connection and Server listening
async function main() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
  
    console.log("MongoDb database is connected");
  
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
  
main();