const request = require("supertest"); // need to install supertest
const app = require("../app");
const db = require("../db");
const jobRepository = require("./job.repository");
