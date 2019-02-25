const _ = require('lodash');

module.exports = function (config) {
    // rules
    _.defaultsDeep(config, {'rules': {}});
    Object.assign(config.rules, require('../rules/import'));
    // plugins
    _.defaultsDeep(config, {'plugins': []});
    config.plugins.push('import');
    // return
    return config;
};