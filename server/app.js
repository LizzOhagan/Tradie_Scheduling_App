require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const jobRouter = require("./jobs/job.router");
// const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");

//middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/jobs", jobRouter);
// app.use("/jobs", jobRouter);

// error handling middleware
// app.use(errorHandlerMiddleware);

module.exports = app;
