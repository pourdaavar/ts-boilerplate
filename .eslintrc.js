const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  root: true,
  modules: {
    typescript: {
      resolverProject: './tsconfig.json',
      parserProject: './tsconfig.json',
    },
  },
});
