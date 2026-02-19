const calculateSkillGap = (userSkills, requiredSkills) => {
  const user = userSkills.map((skill) => skill.toLowerCase());
  const required = requiredSkills.map((skill) => skill.toLowerCase());

  const commonSkills = required.filter((skill) => user.includes(skill));
  const missingSkills = required.filter((skill) => !user.includes(skill));

  const matchPercentage = Math.round(
    (commonSkills.length / required.length) * 100,
  );

  return {
    matchPercentage,
    commonSkills,
    missingSkills,
  };
};

module.exports = calculateSkillGap;
