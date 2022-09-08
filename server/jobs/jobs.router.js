const express = require("express");
/* Creating a new router object. */
const router = express.Router();
const getJobs = require("./jobs.repository");

//get all jobs - Working
router.get("/jobs/", async (req, res, next) => {
  try {
    const jobs = await getJobs.getJobs();
    // console.log(jobs);
    return res.json(jobs);
  } catch (err) {
    next(err.message);
  }
});

// get a job by id  - Working
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

// ----------------------------------------------------------------------------------
// update a job's client details

// not yet working!!
// ----------------------------------------------------------------------------------

router.patch("/jobs/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, phone, address, email } = req.body;
  const updatedJobClientDetails = await getJobs.updateJobClientDetails(
    firstName,
    lastName,
    phone,
    address,
    email,
    id
  );
  res.json(updatedJobClientDetails);
});

// get by status - need to use the same ideas as pagination - status is a query param.

// ----------------------------------------------------------------------------------
// get a job by status: 'completed'

// NOTE this works BUT... you can't repeat the logic for the other status' - the route will only ever show the 'completed' jobs -->  So - not really working LOL!!!
// ----------------------------------------------------------------------------------
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

// ----------------------------------------------------------------------------------
// 2nd attempt at ^ but this time doing it by status

// get a job by status

// NOT WORKING: this only returns an empty array.
// When I pass in jobsByStatus into the ( ) of the IF statement - then it returns the completed jobs but only ever the completed jobs
// ----------------------------------------------------------------------------------
// router.get("/jobs/status/:status", async (req, res) => {
//   try {
//     const { completed, active } = req.query;
//     let jobsByStatus = [];
//     // let activeJobs = [];
//     if (completed) {
//       jobsByStatus = await getJobs.getCompletedJobs(completed);
//       console.log(jobsByStatus);
//     } else if (active) {
//       jobsByStatus = await getJobs.getActiveJobs(active);
//       console.log(jobsByStatus);
//     }
//     res.json(jobsByStatus);
//   } catch (err) {
//     next(err.message);
//   }
// });

module.exports = router;
