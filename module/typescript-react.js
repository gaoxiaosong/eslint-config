const config = {};

require('../install/base')(config);
require('../install/react')(config);
require('../install/typescript')(config);

module.exports = config;