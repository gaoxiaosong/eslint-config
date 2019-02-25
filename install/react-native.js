const _ = require('lodash');

module.exports = function (config) {
    // env
    _.defaultsDeep(config, {'env': {}});
    config.env.node = true;
    // rules
    _.defaultsDeep(config, {'rules': {}});
    Object.assign(config.rules, require('../rules/react-native'));
    // plugins
    _.defaultsDeep(config, {'plugins': []});
    config.plugins.push("react-native");
    // parserOptions
    _.defaultsDeep(config, {'parserOptions': {"ecmaFeatures": {}}});
    config.parserOptions.ecmaFeatures.jsx = true;
    // settings
    _.defaultsDeep(config, {'settings': {'import/resolver': {}}});
    config.settings['import/resolver']['react-native'] = {platform: 'both'};
    // return
    return config;
};