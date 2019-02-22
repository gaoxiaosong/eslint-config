const Install = require('./install');

module.exports = function (config) {
    // extends
    Install.generateDefault(config, 'extends', []);
    config.extends.push("@smartshallot/eslint-config/rules/react");
    // plugins
    Install.generateDefault(config, 'plugins', []);
    config.plugins.push("react");
    // parserOptions
    Install.generateDefault(config, ["parserOptions", "ecmaFeatures"], {});
    config.parserOptions.ecmaFeatures.jsx = true;
};