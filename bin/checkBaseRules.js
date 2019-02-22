/**
 * Check Base Rules in 'eslint' Package.
 */

const Util = require('./util');
const allRules = require('eslint/lib/built-in-rules-index');
const allRuleKeys = Object.keys(allRules);
const myRules = require('../rules/base');
const myRuleKeys = Object.keys(myRules);

Util.seperator();
Util.head('Base');

const whiteList = ['Possible Errors', 'Strict Mode', 'Variables'];

let errorCount = 0;
let deprecatedCount = 0;
for (let i = 0; i < allRuleKeys.length; i++) {
    const ruleId = allRuleKeys[i];
    const isInMyList = myRuleKeys.indexOf(ruleId) >= 0;
    const ruleItem = allRules[ruleId];
    if (ruleItem.meta.deprecated) {
        if (isInMyList) {
            Util.log(ruleId, false, 'deprecated', ruleItem);
            errorCount += 1;
        }
        deprecatedCount += 1;
        continue;
    }
    const isWhite = whiteList.indexOf(ruleItem.meta.docs.category) >= 0;
    if (myRuleKeys.indexOf(ruleId) >= 0) {
        Util.log(ruleId, true);
    } else if (isWhite) {
        Util.log(ruleId, false, 'not exists', ruleItem);
        errorCount += 1;
    }
}

Util.statistics(allRuleKeys.length, myRuleKeys.length, errorCount, deprecatedCount);

Util.seperator();
console.log('');

if (errorCount > 0) {
    process.exit(1);
} else {
    process.exit(0);
}