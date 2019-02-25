const _ = require('lodash');

module.exports = function (config) {
    // rules
    _.defaultsDeep(config, {'rules': {}});
    Object.assign(config.rules, require('../rules/typescript'));
    // parser
    config.parser = "@typescript-eslint/parser";
    // parserOptions
    _.defaultsDeep(config, {'parserOptions': {'ecmaFeatures': {}}});
    config.parserOptions.ecmaFeatures.jsx = true;
    config.parserOptions.ecmaFeatures.useJSXTextNode = true;
    config.parserOptions.ecmaVersion = 6;
    config.parserOptions.sourceType = "module";
    // plugins
    _.defaultsDeep(config, {'plugins': []});
    config.plugins.push("@typescript-eslint");
    // settings
    _.defaultsDeep(config, {'settings': {'import/parsers': {}, 'import/resolver': {}}});
    config.settings['import/parsers']['@typescript-eslint/parser'] = ['.ts', '.tsx'];
    config.settings['import/resolver']['typescript'] = {};
    // return
    return config;
};