require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const jobRouter = require("./jobs/job.router");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");

//middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/jobs", jobRouter); // route not yet working in insomnia

// TODO:
// app.use("api/jobs/:id")
// app.use("api/jobs/:status")

// error handling middleware
app.use(errorHandlerMiddleware);

module.exports = app;
