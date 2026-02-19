/**
 * SkillGap — script.js
 * Shared utilities and mock data for all pages.
 */

/**
 * Returns a mock analysis result based on the selected role.
 * @param {string} role
 * @returns {{ match: number, missing: string[], recommended: string[] }}
 */
function getMockResult(role) {
  const results = {
    'Data Scientist': {
      match: 62,
      missing: ['Docker', 'SQL', 'Machine Learning', 'TensorFlow', 'Statistics'],
      recommended: ['Advanced Python', 'Data Visualization', 'MLflow', 'Pandas Advanced'],
    },
    'Frontend Developer': {
      match: 74,
      missing: ['TypeScript', 'Testing (Jest)', 'Web Accessibility', 'GraphQL'],
      recommended: ['Next.js', 'Tailwind CSS', 'Performance Optimization', 'Storybook'],
    },
    'Backend Developer': {
      match: 55,
      missing: ['Kubernetes', 'Microservices', 'Redis', 'PostgreSQL', 'System Design'],
      recommended: ['Node.js Advanced', 'gRPC', 'API Security', 'CI/CD Pipelines'],
    },
  };

  return results[role] || results['Data Scientist'];
}

/**
 * Safely reads a value from localStorage.
 * @param {string} key
 * @param {string} fallback
 * @returns {string}
 */
function readStorage(key, fallback = '') {
  try { return localStorage.getItem(key) || fallback; }
  catch { return fallback; }
}
