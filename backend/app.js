const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
let nullModule = require("./init.js");
// const globalErorrHandler = require("./controllers/globalErorrHandler");
// const AppError = require("./utils/appError");
// routers
const userRouter = require("./routes/userRoutes");
const attendanceRouter = require("./routes/attendaceRoutes");
// const reviewRouter = require("./routes/reviewRoutes");

const app = express();
// middlewares
//allow cors
app.use(cors())
//set security http headers
app.use(helmet());
//to see requsts in the termenal
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// limit the number of requests of an ip
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "too meny requests for this ip,please try one hour later"
});
app.use("/api", limiter);

//not to add html
app.use(xss());
//to prevent query parameter pollution
app.use(hpp());
//parse the body of the request and add it in req.body
app.use(express.json({ limit: "10kb" }));
//connect the database
const db = require("./models");
// db.sequelize.sync({force:true});
db.sequelize.sync();
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
app.use("/api/v1/users", userRouter);
app.use("/api/v1/attendance", attendanceRouter);

// app.use("/api/v1/reviews", reviewRouter);
//to handle unhandled urls it sends an 404 error
// app.all("*", (req, res, next) => {
//   const err = new AppError(
//     `the requested url ${req.originalUrl} not found in this server`,
//     404
//   );
//   next(err);
// });
//middle ware to catch async errors that uncought untill here all the app and beyoud
// app.use(globalErorrHandler);
module.exports = app;