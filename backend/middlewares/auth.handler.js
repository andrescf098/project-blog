const boom = require("@hapi/boom");
const { config } = require("../config");

const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
};

const checkAuthorizedRoles = (...roles) => {
  return (req, res, next) => {
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
};

const checkId = () => {
  return async (req, res, next) => {
    const userId = req.params.id;
    const user = req.user;
    if (String(user.id) === userId) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
};

module.exports = { checkApiKey, checkAuthorizedRoles, checkId };
