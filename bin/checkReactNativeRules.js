/**
 * Check Base Rules in 'eslint-plugin-react-native' Package.
 */

const prefix = 'react-native/';
const Util = require('./util');
const allRules = require('eslint-plugin-react-native').rules;
const allRuleKeys = Object.keys(allRules);
const myRules = require('../rules/react-native').rules;
const myRuleKeys = Object.keys(myRules);

Util.seperator();
Util.head('React Native');

let errorCount = 0;
for (let i = 0; i < allRuleKeys.length; i++) {
    const ruleId = prefix + allRuleKeys[i];
    const isInMyList = myRuleKeys.indexOf(ruleId) >= 0;
    if (isInMyList) {
        Util.log(ruleId, true);
    } else {
        Util.log(ruleId, false, 'not exists');
        errorCount += 1;
    }
}

Util.statistics(allRuleKeys.length, myRuleKeys.length, errorCount, 0);

Util.seperator();
console.log('');

if (errorCount > 0) {
    process.exit(1);
} else {
    process.exit(0);
}