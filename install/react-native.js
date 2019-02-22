const Install = require('./install');

module.exports = function (config) {
    // extends
    Install.generateDefault(config, 'extends', []);
    config.extends.push("eslint-config-automatic/rules/react-native");
    // plugins
    Install.generateDefault(config, 'plugins', []);
    config.plugins.push("react-native");
    // parserOptions
    Install.generateDefault(config, ["parserOptions", "ecmaFeatures"], {});
    config.parserOptions.ecmaFeatures.jsx = true;
};