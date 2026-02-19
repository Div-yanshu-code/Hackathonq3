const express = require("express");
const router = express.Router();

const {
  createJob,
  getJobs,
  matchSkills,
} = require("../controllers/jobControllers");

router.post("/", createJob);
router.get("/", getJobs);

// 🔥 NEW ROUTE
router.post("/match", matchSkills);

module.exports = router;
