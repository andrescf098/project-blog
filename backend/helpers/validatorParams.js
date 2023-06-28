const validator = require("validator");

function validatorParams(title, content) {
  let validator_title =
    !validator.isEmpty(title) &&
    validator.isLength(title, { min: 5, max: 100 });
  let validator_content = !validator.isEmpty(content);
  if (!validator_title || !validator_content) {
    return {
      message: "[messageController] Error validation",
    };
  } else {
    return null;
  }
}

module.exports = validatorParams;
