/**
 * React
 * React specific linting rules for ESLint.
 * https://github.com/yannickcr/eslint-plugin-react
 */

module.exports = {
    "react/default-props-match-prop-types": 0, // TODO 暂时禁用
    "react/display-name": 0,
    "react/no-children-prop": 2,
    "react/no-deprecated": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-find-dom-node": 2,
    "react/no-is-mounted": 2,
    "react/no-redundant-should-component-update": 2,
    "react/no-render-return-value": 2,
    "react/no-string-refs": 2,
    "react/no-unescaped-entities": 2,
    "react/no-unknown-property": 2,
    "react/prop-types": 0, // TODO 暂时禁用
    "react/react-in-jsx-scope": 2,
    "react/require-render-return": 2,
    "react/jsx-closing-tag-location": 2,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-curly-spacing": [2, {"when": "never"}],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-first-prop-new-line": [2, "multiline-multiprop"],
    "react/jsx-indent": [2, 4],
    "react/jsx-indent-props": [2, 4],
    "react/jsx-key": 2,
    "react/jsx-max-depth": [2, {"max": 4}],
    "react/jsx-max-props-per-line": [2, {"maximum": 2}],
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 2,
    "react/jsx-no-undef": [2, {"allowGlobals": true}],
    "react/jsx-one-expression-per-line": 2,
    "react/jsx-props-no-multi-spaces": 2,
    "react/jsx-tag-spacing": [2, {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never"
    }],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-wrap-multilines": [2, {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
    }],
};