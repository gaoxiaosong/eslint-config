/**
 * Possible Errors
 * 这些规则与JavaScript代码中可能的错误或逻辑错误有关。
 * http://eslint.cn/docs/rules/#possible-errors
 */

module.exports = {
    /**
     * 强制for循环中更新子句的计数器朝着正确的方向移动。
     * http://eslint.cn/docs/rules/for-direction
     */
    "for-direction": "error",
    /**
     * 强制getter函数中出现return语句。
     * http://eslint.cn/docs/rules/getter-return
     */
    "getter-return": ["error", {
        "allowImplicit": false,
    }],
    /**
     * 禁止在循环中出现await。
     * http://eslint.cn/docs/rules/no-await-in-loop
     */
    "no-await-in-loop": "error",
    /**
     * 禁止与-0进行比较。
     * http://eslint.cn/docs/rules/no-compare-neg-zero
     */
    "no-compare-neg-zero": "error",
    /**
     * 禁止在条件语句中出现赋值操作符。
     */
    "no-cond-assign": ["error", "always"],
    /**
     * 禁用console。
     * http://eslint.cn/docs/rules/no-console
     */
    "no-console": ["error", {
        "allow": [],
    }],
    /**
     * 禁止在条件中使用常量表达式。
     * http://eslint.cn/docs/rules/no-constant-condition
     */
    "no-constant-condition": ["error", {
        "checkLoops": false,
    }],
    /**
     * 禁止在正则表达式中使用控制字符。
     * http://eslint.cn/docs/rules/no-control-regex
     */
    "no-control-regex": "error",
    /**
     * 禁用debugger。
     * http://eslint.cn/docs/rules/no-debugger
     */
    "no-debugger": "error",
    /**
     * 禁止function定义中出现重名参数。
     * http://eslint.cn/docs/rules/no-dupe-args
     */
    "no-dupe-args": "error",
    /**
     * 禁止对象字面量中出现重复的key。
     * http://eslint.cn/docs/rules/no-dupe-keys
     */
    "no-dupe-keys": "error",
    /**
     * 禁止出现重复的case标签。
     * http://eslint.cn/docs/rules/no-duplicate-case
     */
    "no-duplicate-case": "error",
    /**
     * 禁止出现空语句块。
     * http://eslint.cn/docs/rules/no-empty
     */
    "no-empty": ["error", {
        "allowEmptyCatch": true,
    }],
    /**
     * 禁止在正则表达式中使用空字符集。
     * http://eslint.cn/docs/rules/no-empty-character-class
     */
    "no-empty-character-class": "error",
    /**
     * 禁止对catch子句的参数重新赋值。
     * http://eslint.cn/docs/rules/no-ex-assign
     */
    "no-ex-assign": "error",
    /**
     * 禁止不必要的布尔转换。
     * http://eslint.cn/docs/rules/no-extra-boolean-cast
     */
    "no-extra-boolean-cast": "error",
    /**
     * 禁止不必要的括号。
     * http://eslint.cn/docs/rules/no-extra-parens
     */
    "no-extra-parens": ["error", "all", {
        "conditionalAssign": true,
        "returnAssign": true,
        "nestedBinaryExpressions": true,
        "ignoreJSX": "multi-line",
        "enforceForArrowConditionals": true,
    }],
    /**
     * 禁止不必要的分号。
     * http://eslint.cn/docs/rules/no-extra-semi
     */
    "no-extra-semi": "error",
    /**
     * 禁止对function声明重新赋值。
     * http://eslint.cn/docs/rules/no-func-assign
     */
    "no-func-assign": "error",
    /**
     * 禁止在嵌套的块中出现变量声明或function声明。
     * http://eslint.cn/docs/rules/no-inner-declarations
     */
    "no-inner-declarations": ["error", "both"],
    /**
     * 禁止RegExp构造函数中存在无效的正则表达式字符串。
     * http://eslint.cn/docs/rules/no-invalid-regexp
     */
    "no-invalid-regexp": ["error", {
        "allowConstructorFlags": ["u", "y"],
    }],
    /**
     * 禁止在字符串和注释之外不规则的空白。
     * http://eslint.cn/docs/rules/no-irregular-whitespace
     */
    "no-irregular-whitespace": ["error", {
        "skipStrings": "true",
        "skipComments": "true",
        "skipRegExps": "true",
        "skipTemplates": "true",
    }],
    /**
     * 禁止把全局对象作为函数调用。
     * http://eslint.cn/docs/rules/no-obj-calls
     */
    "no-obj-calls": "error",
    /**
     * 禁止直接调用Object.prototypes的内置属性。
     * http://eslint.cn/docs/rules/no-prototype-builtins
     */
    "no-prototype-builtins": "warn",
    /**
     * 禁止正则表达式字面量中出现多个空格。
     * http://eslint.cn/docs/rules/no-regex-spaces
     */
    "no-regex-spaces": "error",
    /**
     * 禁用稀疏数组。
     * http://eslint.cn/docs/rules/no-sparse-arrays
     */
    "no-sparse-arrays": "error",
    /**
     * 禁止在常规字符串中出现模板字面量占位符语法。
     * http://eslint.cn/docs/rules/no-template-curly-in-string
     */
    "no-template-curly-in-string": "error",
    /**
     * 禁止出现令人困惑的多行表达式。
     * http://eslint.cn/docs/rules/no-unexpected-multiline
     */
    "no-unexpected-multiline": "error",
    /**
     * 禁止在return、throw、continue和break语句之后出现不可达代码。
     * http://eslint.cn/docs/rules/no-unreachable
     */
    "no-unreachable": "error",
    /**
     * 禁止在finally语句块中出现控制流语句。
     * http://eslint.cn/docs/rules/no-unsafe-finally
     */
    "no-unsafe-finally": "error",
    /**
     * 禁止对关系运算符的左操作数使用否定操作符。
     * http://eslint.cn/docs/rules/no-unsafe-negation
     */
    "no-unsafe-negation": "error",
    /**
     * 要求使用isNaN()检查NaN。
     * http://eslint.cn/docs/rules/use-isnan
     */
    "use-isnan": "error",
    /**
     * 强制使用有效的JSDoc注释。
     * http://eslint.cn/docs/rules/valid-jsdoc
     */
    "valid-jsdoc": ["warn", {
        "prefer": {
            "arg": "param",
            "argument": "param",
            "class": "constructor",
            "return": "returns",
            "virtual": "abstract",
        },
        "preferType": {
            "Boolean": "boolean",
            "Number": "number",
            "object": "object",
            "String": "string",
        },
        "requireReturn": false,
        "requireReturnType": true,
        "matchDescription": ".+",
        "requireParamDescription": true,
        "requireReturnDescription": true,
    }],
    /**
     * 强制typeof表达式与有效的字符串进行比较。
     * http://eslint.cn/docs/rules/valid-typeof
     */
    "valid-typeof": ["error", {
        "requireStringLiterals": true,
    }],
};