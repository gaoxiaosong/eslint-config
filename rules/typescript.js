/**
 * TypeScript
 * Allow ESLint users to lint their TypeScript code.
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */

module.exports = {
    "rules": {
        "@typescript-eslint/array-type": ["error", "array-simple"],
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-inferrable-types": [1, {
            "ignoreProperties": true,
            "ignoreParameters": true,
        }],
        "@typescript-eslint/no-object-literal-type-assertion": 0,
        "@typescript-eslint/no-unused-vars": [2, {
            "argsIgnorePattern": "^_",
        }],
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/no-var-requires": 0,
    },
};