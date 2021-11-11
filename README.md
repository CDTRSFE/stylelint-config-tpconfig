# stylelint-config-tpconfig

此扩展包是基于 `stylelint-config-standard` 自定义的 `stylelint` 校验规则。

保证项目安装 `stylelint` 后进行如下操作：

## 安装

```shell
$ npm install @trscd/stylelint-config-tpconfig --save-dev
```

## 使用

在工程根目录创建一个 `stylelint.config.js` 文件，或者创建 [stylelint配置](https://stylelint.io/user-guide/configure) 允许的其他文件填写如下内容：

```javascript
// stylelint.config.js
{
    extends: '@trscd/stylelint-config-tpconfig'
}
```

根据团队内部需求，若有修改，可在后面增加 `rules` 属性自行配置。

## 自动修复

### 编辑器自动修复

需要下载对应的编辑器修复插件，以 `vscode` 举例，需要在 `vscode` 扩展工具中下载 `stylelint` 插件。Stylelint v14 默认不再检查 `html`, `vue` 文件，需要配置插件选项 `stylelint.validate`:

```js
// vscode/settings.json

{
  "stylelint.validate": [
      ...,
      // ↓ Add "html" language.
      "html",
      // ↓ Add "vue" language.
      "vue",
  ]
}
```

### webpack打包修复

需要安装 [stylelint-webpack-plugin](https://webpack.docschina.org/plugins/stylelint-webpack-plugin/) ，然后在配置文件中进行对应配置。

### 命令行修复

以 `vue` 工程举例，只修复 `src` 下面的一些文件，在 `package.json` 里添加如下配置：

```json
// package.json
"scripts": {
    "stylelint": "stylelint 'src/**/*.{vue,html,css,less,scss,sass}' --fix"
}
```

## 其他

使用 `stylelint `校验规则时，若开启了编辑器自动校验修复，建议屏蔽掉编辑器自带校验规则。

