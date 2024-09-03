const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function sanitizeEmail(email) {
  return emailPattern.test(email);
}

module.exports = sanitizeEmail;