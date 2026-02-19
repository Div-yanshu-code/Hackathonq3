const JobRole = require("../models/JobRole");

const createJob = async (req, res) => {
  try {
    const job = await JobRole.create(req.body);
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await JobRole.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createJob,
  getJobs,
};
const calculateSkillGap = require("../utils/matchEngine");

const matchSkills = async (req, res) => {
  try {
    const { role, userSkills } = req.body;

    const job = await JobRole.findOne({
      title: { $regex: new RegExp(`^${role}$`, "i") },
    });


    if (!job) {
      return res.status(404).json({ message: "Job role not found" });
    }

    const result = calculateSkillGap(userSkills, job.requiredSkills);

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createJob,
  getJobs,
  matchSkills,
};
