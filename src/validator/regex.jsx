// regex component

// email regex
const testEmail = (value) => {
  const emailPattent = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g;
  return emailPattent.test(value);
};

// username regex
const testUsername = (value) => {
  const usernameParent = /^[a-z0-9_-]{4,15}$/;
  return usernameParent.test(value);
};

// phone regex
const testPhone = (value) => {
  const phoneParent = /(\+98|0)?9\d{9}/;
  return phoneParent.test(value);
};

// password regex
const testPassword = (value) => {
  const passwordParent = /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9]{8,20}$/g;
  return passwordParent.test(value);
};

export default { testEmail, testUsername, testPhone, testPassword };
