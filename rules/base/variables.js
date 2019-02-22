/**
 * Variables
 * 这些规则与变量声明有关。
 * https://eslint.bootcss.com/docs/rules/#variables
 */

module.exports = {
    /**
     * 要求或禁止var声明中的初始化。
     * https://eslint.bootcss.com/docs/rules/init-declarations/
     */
    "init-declarations": ["error", "always"],
    /**
     * 禁止删除变量。
     * https://eslint.bootcss.com/docs/rules/no-delete-var/
     */
    "no-delete-var": "error",
    /**
     * 不允许标签与变量同名。
     * https://eslint.bootcss.com/docs/rules/no-label-var/
     */
    "no-label-var": "error",
    /**
     * 禁用特定的全局变量。
     * https://eslint.bootcss.com/docs/rules/no-restricted-globals/
     */
    "no-restricted-globals": ["error", "event", "fdescribe"],
    /**
     * 禁止变量声明与外层作用域的变量同名。
     * https://eslint.bootcss.com/docs/rules/no-shadow/
     */
    "no-shadow": ["error", {
        "builtinGlobals": true,
        "hoist": "all",
        "allow": undefined,
    }],
    /**
     * 禁止将标识符定义为受限的名字。
     * https://eslint.bootcss.com/docs/rules/no-shadow-restricted-names/
     */
    "no-shadow-restricted-names": "error",
    /**
     * 禁用未声明的变量，除非它们在global注释中被提到。
     * https://eslint.bootcss.com/docs/rules/no-undef/
     */
    "no-undef": ["error", {
        "typeof": true,
    }],
    /**
     * 禁止将变量初始化为undefined。
     * https://eslint.bootcss.com/docs/rules/no-undef-init/
     */
    "no-undef-init": "error",
    /**
     * 禁止将undefined作为标识符。
     * https://eslint.bootcss.com/docs/rules/no-undefined/
     */
    "no-undefined": "warn",
    /**
     * 禁止出现未使用过的变量。
     * https://eslint.bootcss.com/docs/rules/no-unused-vars/
     */
    "no-unused-vars": ["error", {
        "vars": "all",
        "varsIgnorePattern": undefined,
        "args": "after-used",
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true,
        "caughtErrors": "none",
        "caughtErrorsIgnorePattern": undefined,
    }],
    /**
     * 禁止在变量定义之前使用它们。
     * https://eslint.bootcss.com/docs/rules/no-use-before-define/
     */
    "no-use-before-define": ["error", {
        "functions": false,
        "classes": false,
        "variables": false,
    }],
};