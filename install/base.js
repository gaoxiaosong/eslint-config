const Install = require('./install');

module.exports = function (config) {
    // extends
    Install.generateDefault(config, 'extends', []);
    config.extends.push("@smartshallot/eslint-config/rules/base");
};