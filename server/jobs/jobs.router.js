const express = require("express");
/* Creating a new router object. */
const router = express.Router();
const getJobs = require("./jobs.repository");

//get all jobs - Working

router.get("/jobs/", async (req, res, next) => {
  try {
    const { status } = req.query;
    console.log(status);

    let jobs = [];

    if (status) {
      jobs = await getJobs.getJobsByStatus(status);
    } else {
      jobs = await getJobs.getJobs();
    }

    return res.json(jobs);
  } catch (err) {
    next(err);
  }
});

// get a job by id  - Working
router.get("/jobs/:id", async (req, res, next) => {
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

module.exports = router;
