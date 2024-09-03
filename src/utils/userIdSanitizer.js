const usernamePattern = /^[a-zA-Z0-9][a-zA-Z0-9._-]{1,18}[a-zA-Z0-9]$/;

function sanitizeUserId(userId) {
  return usernamePattern.test(userId);
}

module.exports = sanitizeUserId;