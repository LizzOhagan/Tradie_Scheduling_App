const express = require("express");
/* Creating a new router object. */
const router = express.Router();
const getJobs = require("./jobs.repository");

//get all jobs
router.get("/jobs/", async (req, res, next) => {
  try {
    const jobs = await getJobs.getJobs();
    // console.log(jobs);
    return res.json(jobs);
  } catch (err) {
    next(err.message);
  }
});

// get a job by id
router.get("/jobs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const job = await getJobs.getJobById(id);
    console.log(job);
    return res.json(job);
  } catch (err) {
    next(err.message);
  }
});

// update a job
// router.patch("/jobs/:id", async (req, res) => {
//   const { id } = req.params;
//   const { status, jobScope, quote } = req.body;
//   const updatedJob = await getJobs.updateJob(id, status, jobScope, quote);
//   res.json(updatedJob);
// });

// get a job by status: completed
// router.get("/jobs/status/:status", async (req, res) => {
//   try {
//     const { status } = req.params;
//     console.log(req.params);
//     const completedJobs = await getJobs.getCompletedJobs(status);
//     console.log(completedJobs);
//     return res.json(completedJobs);
//   } catch (err) {
//     next(err.message);
//   }
// });

// get a job by status: active
router.get("/jobs/status/:status", async (req, res) => {
  try {
    const { completed, active } = req.query;
    let jobsByStatus = [];
    // let activeJobs = [];
    if (completed) {
      jobsByStatus = await getJobs.getCompletedJobs(completed);
      console.log(jobsByStatus);
    } else if (active) {
      jobsByStatus = await getJobs.getActiveJobs(active);
      console.log(jobsByStatus);
    }
    res.json(jobsByStatus);
  } catch (err) {
    next(err.message);
  }
});

module.exports = router;
