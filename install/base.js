const Install = require('./install');

module.exports = function (config) {
    // extends
    Install.generateDefault(config, 'extends', []);
    config.extends.push("eslint-config-automatic/rules/base");
};