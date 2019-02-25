/**
 * Import
 * ESLint plugin with rules that help validate proper imports..
 * https://github.com/benmosher/eslint-plugin-import
 */

module.exports = {
    "import/first": 2,
    "import/newline-after-import": [2, {"count": 1}],
    "import/no-cycle": 2,
    "import/no-duplicates": 2,
    "import/no-dynamic-require": 2,
    "import/no-nodejs-modules": 2,
    "import/no-self-import": 2,
    "import/no-unresolved": [2, {
        "commonjs": true,
        "amd": true,
        "ignore": [
            "^react$",
            "^react-native$",
            "^react-navigation$",
        ],
    }],
};