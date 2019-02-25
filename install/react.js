const _ = require('lodash');

module.exports = function (config) {
    // env
    _.defaultsDeep(config, {'env': {}});
    config.env.commonjs = true;
    // rules
    _.defaultsDeep(config, {'rules': {}});
    Object.assign(config.rules, require('../rules/react'));
    // plugins
    _.defaultsDeep(config, {'plugins': []});
    config.plugins.push("react");
    // parser
    config.parser = "babel-eslint";
    // parserOptions
    _.defaultsDeep(config, {'parserOptions': {"ecmaFeatures": {}}});
    config.parserOptions.ecmaFeatures.jsx = true;
    config.parserOptions.sourceType = "module";
    // settings
    _.defaultsDeep(config, {'settings': {'react': {}}});
    config.settings.react.createClass = "createReactClass";
    config.settings.react.pragma = "React";
    config.settings.react.version = "detect";
    // return
    return config;
};