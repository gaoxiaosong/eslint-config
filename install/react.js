const _ = require('lodash');

module.exports = function (config) {
    // rules
    _.defaultsDeep(config, {'rules': {}});
    Object.assign(config.rules, require('../rules/react'));
    // plugins
    _.defaultsDeep(config, {'plugins': []});
    config.plugins.push("react");
    // parserOptions
    _.defaultsDeep(config, {'parserOptions': {"ecmaFeatures": {}}});
    config.parserOptions.ecmaFeatures.jsx = true;
    // settings
    _.defaultsDeep(config, {'settings': {'react': {}}});
    config.settings.react.createClass = "createReactClass";
    config.settings.react.pragma = "React";
    config.settings.react.version = "detect";
    // return
    return config;
};