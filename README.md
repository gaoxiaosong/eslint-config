# eslint-config

[![npm version](https://img.shields.io/npm/v/@smartshallot/eslint-config.svg?style=flat)](https://www.npmjs.com/package/@smartshallot/eslint-config)
[![Build Status](https://travis-ci.org/gaoxiaosong/eslint-config.svg?branch=master)](https://travis-ci.org/gaoxiaosong/eslint-config)

这是个人的ESLint规则配置，包括多个常用集合，对于每一条规则，提供简要注释和规则说明网址，没有使用其他的`extends`。

## 配置信息

在`rules`目录下，有一些规则库，可以作为单独的配置信息，放入ESLint配置文件中的`extends`里面。

例如，如果想引用`React Native`的规则，则在`extends`中添加如下代码：

```javascript
"extends": [
    "@smartshallot/rules/react-native",
]
```

其余依次类推，目前支持的配置如下所示：

* `base`：包含现有的每一条规则，按照分类组织文件结构。具体规则列表请参照ESLint官方网站：[规则文档](http://eslint.cn/docs/rules/)。
* `react`
* `react-native`：使用了插件[eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native)。
* `typescript`

如果只引用规则，那ESLint配置文件剩余的部分都需要自行完成，也可以使用`install`目录下相应的安装脚本来进行设置。

依旧以`react-native`为例，在`.eslintrc.js`中，设置如下：

```javascript
const config = {
    // ...
    "extends": [
        // ...
        "@smartshallot/rules/react-native",
    ],
    // ...
}

require('@smartshallot/install/react-native')(config);

module.exports = config;
```

注意：`install`中的脚本，只设置一个配置插件的设置项，如果要引用多个配置信息，则需要依次对`config`进行设置，可参照`module`目录中的文件写法。

## 整体集成

除了上述的只引用规则信息之外，还可以使用已经集成好的脚本，来生成相应的ESLint配置文件。

以TypeScript语言的`react-native`项目为例，对应于`module`目录下的`typescript-react-native.js`文件，需要在`.eslintrc.js`中，设置如下：

```javascript
const config = require('@smartshallot/module/typescript-react-native');
// 这里添加想修改的设置，也可以不添加
module.exports = config;
```

目前支持的集成设置类型如下：

* `javascript`：只使用JavaScript开发的项目，没有React相关代码。
* `javascript-react`：使用JavaScript开发的React项目。
* `javascript-react-native`：使用JavaScript开发的React Native项目。
* `typescript`：只使用TypeScript开发的项目，没有React相关代码。
* `typescript-react`：使用TypeScript开发的React项目。
* `typescript-react-native`：使用TypeScript开发的React Native项目。