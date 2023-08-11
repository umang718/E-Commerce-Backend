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
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDUyYTZkNmI4ZjU0YTkwZDExMGY0MyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkxNzMyNzA2fQ.cXSdgkExWwm8H2J0vTmkzCJzyUgwZya8VzBRIHhnXow";
//   token =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDUyYTZkNmI4ZjU0YTkwZDExMGY0MyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkxNjkxNjUwfQ.4IHPtOav3OFiFTMAnlcfD9akLATO8dikwg8AYE4jwr0"; 
  return token;
};
