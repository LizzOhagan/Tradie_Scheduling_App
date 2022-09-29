const express = require("express");
/* Creating a new router object. */
const router = express.Router();
const getJobs = require("./jobs.repository");

// ---------------------------------------------------------------------
// GET ALL JOBS   &   GET JOBS BY STATUS

// NOTE 1: you can only have one get for each route - so when you want to query by different parts of the body then it needs to be added to the GET all jobs route.

// NOTE 2: req.query is an object that is requested in the query string parameter of the route. Eg. to GET jobs by status below, the URL needs to have the route along with the following query string: /jobs?status=completed . The status at the end of the query can be changed depending on which status you want to look up. eg change 'completed' to 'active' in the query string.
// ---------------------------------------------------------------------

router.get("/jobs/", async (req, res, next) => {
  try {
    const { status } = req.query;
    // console.log(status);
    let jobs = [];
    if (status) {
      jobs = await getJobs.getJobsByStatus(status);
    } else {
      jobs = await getJobs.getJobs();
    }
    return res.send(jobs);
  } catch (err) {
    next(err);
  }
});

// ---------------------------------------------------------------------
// GET A JOB BY ID

// NOTE 1: req.params is an object of the req (request) object that contains route parameters. If the params are specified when a URL is built, then the req.params object will be populated when the URL is requested. Request is a part of the Express framework https://expressjs.com/en/api.html#req.params

// NOTE 2: const { id } = req.params --> this is destructuring the req.params.id --> tidier code
// ---------------------------------------------------------------------

router.get("/jobs/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    // const id = req.params.id;
    // console.log(id);
    const job = await getJobs.getJobById(id);
    console.log(job);
    return res.send(job);
  } catch (err) {
    next(err);
  }
});

// ----------------------------------------------------------------------------------
// update a job's client details

// not yet working!!
// ----------------------------------------------------------------------------------

router.put("/jobs/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { quote, job_scope, status_id } = req.body;
    // const job = req.body;
    // console.log(quote);
    const updatedJob = await getJobs.updateJob(quote, job_scope, status_id, id);
    // const updatedJob = await getJobs.updateJob(job);
    // console.log(updatedJob);
    res.json(updatedJob);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
