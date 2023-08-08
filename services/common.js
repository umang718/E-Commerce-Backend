const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDFmOGRjNzk0NzY3YjY3MjI3MmRiMiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkxNDgyMzMyfQ.v1Rj1Pb_ThDt4JiWOV3EJkZcqu4BlwjYLNiHvLQShHE";
  return token;
};
