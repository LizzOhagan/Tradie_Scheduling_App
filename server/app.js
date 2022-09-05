require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./jobs/job.router");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const fs = require("fs");
// const swaggerDocument = YAML.load("./apispec.yaml");

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const swaggerDocument = yaml.load(
  fs.readFileSync(path.join(__dirname, "./apispec.yaml"), "utf8")
);

//middleware
app.use(cors());
app.use(express.json());

// app.use(() => {
//   console.log("hellow");
// });

// routes
app.use("/jobs", router); // route not yet working in insomnia

// TODO:
// app.use("/jobs/:id")
// app.use("/jobs/:status")

// error handling middleware
app.use(errorHandlerMiddleware);

module.exports = app;
