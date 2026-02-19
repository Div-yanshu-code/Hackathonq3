const express = require("express");
const router = express.Router();

router.post("/match", (req, res) => {
  const { role, userSkills } = req.body;

  // dummy logic
  const requiredSkills = ["Python", "SQL", "Machine Learning"];

  const missingSkills = requiredSkills.filter(
    (skill) => !userSkills.includes(skill),
  );

  const matchPercentage =
    ((requiredSkills.length - missingSkills.length) / requiredSkills.length) *
    100;

  res.json({
    matchPercentage: Math.round(matchPercentage),
    missingSkills,
  });
});

module.exports = router;
