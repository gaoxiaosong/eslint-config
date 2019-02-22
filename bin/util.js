function log(ruleId, isSuccess, message, ruleItem) {
    if (isSuccess) {
        console.log('  ', ruleId + ':', 'Pass!');
    } else {
        console.log(
            '  ', '+', ruleId + ':',
            message + '!',
            ruleItem ? ruleItem.meta.docs.category + '!' : '',
            ruleItem ? ruleItem.meta.docs.url : '');
    }
}

function statistics(totalCount, myCount, errorCount, deprecatedCount) {
    console.log('Total', 'Count', '=', totalCount);
    console.log('Deprecated', 'Count', '=', deprecatedCount);
    console.log('My', 'Count', '=', myCount);
    console.log('Error', 'Count', '=', errorCount);
}

function seperator() {
    console.log('------------------------------');
}

function head(name) {
    console.log('Checking', name, 'Rules:');
}

module.exports = {
    log,
    statistics,
    seperator,
    head,
};