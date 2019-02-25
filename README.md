# eslint-plugin-automatic

[![npm version](https://img.shields.io/npm/v/eslint-plugin-automatic.svg?style=flat)](https://www.npmjs.com/package/eslint-plugin-automatic)
[![Build Status](https://travis-ci.org/gaoxiaosong/eslint-plugin-automatic.svg?branch=master)](https://travis-ci.org/gaoxiaosong/eslint-plugin-automatic)

这是个人的ESLint规则配置，包括多个常用集合，对于每一条规则，提供简要注释和规则说明网址。`rules`目录下，是一些规则的具体配置。

首先，需要安装：

```shell
npm install --save-dev eslint-plugin-automatic
```

然后，在ESLint配置文件的`plugin`部分，加入：

```javascript
plugin: [
    "automatic",
]
```

如果想引用TypeScript语言的React Native项目规则，则在ESLint配置文件的`extends`中添加如下内容：

```javascript
"extends": [
    "plugin:automatic/typescript-react-native",
]
```

目前支持的`extends`类型如下：

* `javascript`：只使用JavaScript开发的项目，没有React相关代码。
* `javascript-react`：使用JavaScript开发的React项目。
* `javascript-react-native`：使用JavaScript开发的React Native项目。
* `typescript`：只使用TypeScript开发的项目，没有React相关代码。
* `typescript-react`：使用TypeScript开发的React项目。
* `typescript-react-native`：使用TypeScript开发的React Native项目。

目前`typescript-xxx`使用的`parser`是`@typescript-eslint/parser`，而`javascript-react-xxx`使用的`parser`是`babel-eslint`，需要酌情加入`.babelrc`。

对于`javascript-react-native`来说，需要在`.babelrc`中加入：

```javascript
{
    "presets": ["react-native"]
}
```