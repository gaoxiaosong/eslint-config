function generateDefault(config, key, defaultValue) {
    const keys = Array.isArray(key) ? key : [key];
    keys.reduce(function (prv, cur) {
        if (!prv[cur]) {
            if (cur === keys[keys.length - 1]) {
                prv[cur] = defaultValue;
            } else {
                prv[cur] = {};
            }
        }
        return prv[cur];
    }, config);
}

module.exports = {
    generateDefault,
};