const express = require("express");
/* Creating a new router object. */
const router = express.Router();
const getJobs = require("./job.repository");

router.get("/"),
  async (req, res, next) => {
    try {
      const jobs = await getJobs.getJobs;
      return res.json(jobs);
    } catch (err) {
      next(err);
    }
  };

module.exports = router;
