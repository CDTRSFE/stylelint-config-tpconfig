# stylelint-config-tpconfig

此扩展包是基于`stylelint-config-standard`自定义的团队`stylelint`校验规则。

## 安装

```
npm install stylelint-config-tpconfig --save-dev
```

## 使用

```
// stylelint.config.js
{
	'extends': ['stylelint-config-standard', 'stylelint-config-tpconfig']
}
```

根据团队内部需求，若有修改，可在后面增加`rules`属性自行配置。

## 其他

使用`stylelint`校验规则时，若开启了编辑器自动校验修复，建议屏蔽掉编辑器自带校验规则。

