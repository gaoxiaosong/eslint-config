/**
 * Base
 * 为了让你对规则有个更好的理解，ESLint对其进行了分门别类。
 * https://eslint.bootcss.com/docs/rules/
 */

module.exports = {
    "rules": {
        ...require('./possible-errors'),
        ...require('./strict-mode'),
        ...require('./variables'),
    },
};