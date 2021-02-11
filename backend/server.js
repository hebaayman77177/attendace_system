const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
console.log("###############################################################");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");
const sequelize = new Sequelize('attendancesystem', 'heba', '123456789', {
  host: 'localhost',
  dialect:  'postgres' 
});
process.on("uncaughtException", err => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});
dotenv.config({ path: "./env.env" });
const app = require("./app");

// // const DB = process.env.DATABASE.replace(
// //   "<PASSWORD>",
// //   process.env.DATABASE_PASSWORD
// // );
// const DB = process.env.DATABASE_LOCAL;
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("DB connection successful!");
//   });

// const port = process.env.PORT || 3000;
// const server = app.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });

// process.on("unhandledRejection", err => {
//   console.log("UNHANDLED REJECTION! 💥 Shutting down...");
//   console.log(err.name, err.message);
//   server.close(() => {
//     process.exit(1);
//   });
// });