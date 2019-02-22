# eslint-config

[![npm version](https://img.shields.io/npm/v/@smartshallot/eslint-config.svg?style=flat)](https://www.npmjs.com/package/@smartshallot/eslint-config)
[![Build Status](https://travis-ci.org/gaoxiaosong/eslint-config.svg?branch=master)](https://travis-ci.org/gaoxiaosong/eslint-config)

这是个人的ESLint规则配置，包括多个常用集合，对于每一条规则，提供简要注释和规则说明网址，没有使用其他的`extends`。

## 基础规则

包含现有的每一条规则，按照分类组织文件结构。

具体规则列表请参照ESLint官方网站：[规则文档](http://eslint.cn/docs/rules/)。

## React Native (JavaScript)

这里使用了插件[eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native)。

继承了`React (JavaScript)`部分的规则，添加了一些独有的规则。

在工程的`.eslintrc.js`中的`extends`里添加`@smartshallot/eslint-config/react-native`即可使用。