require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const jobsRouter = require("./jobs/jobs.router");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const fs = require("fs");
const swaggerDocument = YAML.load("./apispec.yaml");

// const swaggerDocument = yaml.load(
//   fs.readFileSync(path.join(__dirname, "./apispec.yaml"), "utf8")
// );

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//middleware
app.use(cors());
app.use(express.json());

// app.use(() => {
//   console.log("hellow");
// });

// routes
app.use("/", jobsRouter);

// TODO:
// app.use("/jobs/:id")
// app.use("/jobs/:status")

// error handling middleware
app.use(errorHandlerMiddleware);

module.exports = app;
