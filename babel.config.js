module.exports = function (api) {
  const fui = require("@fui/babel-preset-fineui").configs.base(api);

  return {
    compact: false,
    ...fui,
  };
};
