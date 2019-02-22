module.exports = {
    "extends": [
        "eslint:recommended",
    ],
    "rules": {
        ...require('./rules/base'),
        "array-callback-return": 2,
        "indent": [2, 4, {
            SwitchCase: 1,
        }], // enforce consistent indentation
        "linebreak-style": [2, "unix"], // enforce consistent linebreak style
        "no-var": 2, // require let or const instead of var
        "semi": 2, // require or disallow semicolons instead of ASI
        "switch-colon-spacing": [2, {"after": true, "before": false}], // enforce spacing around colons of switch statements
        "default-case": 2, // require default cases in switch statements
        "no-alert": 2, // disallow the use of alert, confirm, and prompt
        "no-empty-function": 2, // disallow empty functions
        "no-multiple-empty-lines": [2, {
            "max": 1,
            "maxEOF": 1,
            "maxBOF": 0,
        }], // disallow multiple empty lines
        "padded-blocks": [2, {
            "blocks": "never",
            "classes": "never",
            "switches": "never",
        }], // require or disallow padding within blocks
        "prefer-const": 2, // require const declarations for variables that are never reassigned after declared
        "space-before-blocks": [2, "always"], // enforce consistent spacing before blocks
        "space-in-parens": [2, "never"], // space-in-parens
        "space-before-function-paren": [2, {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always",
        }], // enforce consistent spacing before function definition opening parenthesis
        "space-unary-ops": [2, {
            "words": true,
            "nonwords": false,
        }], // enforce consistent spacing before or after unary operators
        "space-infix-ops": [2, {"int32Hint": true}], // require spacing around infix operators
        "spaced-comment": [2, "always"], // enforce consistent spacing after the // or /* in a comment
        "no-duplicate-imports": 2, // disallow duplicate module imports
        "no-restricted-imports": 2, // disallow specified modules when loaded by import
    },
};
