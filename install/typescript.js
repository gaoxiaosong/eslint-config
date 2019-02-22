const Install = require('./install');

module.exports = function (config) {
    // extends
    Install.generateDefault(config, 'extends', []);
    config.extends.push("eslint-config-automatic/rules/typescript");
    // parser
    config.parser = "@typescript-eslint/parser";
    // parserOptions
    Install.generateDefault(config, ['parserOptions', 'ecmaFeatures'], {});
    config.parserOptions.ecmaFeatures.jsx = true;
    config.parserOptions.ecmaFeatures.useJSXTextNode = true;
    // plugins
    Install.generateDefault(config, 'plugins', []);
    config.plugins.push("@typescript-eslint");
};