const _ = require('lodash');

module.exports = function (config) {
    // rules
    _.defaultsDeep(config, {'rules': {}});
    Object.assign(config.rules, require('../rules/react-native'));
    // plugins
    _.defaultsDeep(config, {'plugins': []});
    config.plugins.push("react-native");
    // parserOptions
    _.defaultsDeep(config, {'parserOptions': {"ecmaFeatures": {}}});
    config.parserOptions.ecmaFeatures.jsx = true;
    // return
    return config;
};