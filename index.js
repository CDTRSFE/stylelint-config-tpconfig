module.exports = {
    extends: ['stylelint-config-html/html', 'stylelint-config-html/vue', 'stylelint-config-standard'],
    plugins: [
        // 'stylelint-declaration-block-no-ignored-properties',
        'stylelint-order',
    ],
    ignoreFiles: ['node_modules/'],
    rules: {
        'plugin/declaration-block-no-ignored-properties': true,
        // 各分类属性顺序
        'order/order': [
            'custom-properties',
            'dollar-variables',
            'declarations',
            'rules',
            'at-rules',
        ],
        'no-empty-source': null,
        // 关闭低层级选择器的位置必须在高层级选择器位置之前
        'no-descending-specificity': null,
        // 指定4个空格
        'indentation': 4,
        // 多个选择器样式之间不允许有空行
        'rule-empty-line-before': 'never-multi-line',
        // 样式块中不允许重复的属性
        'declaration-block-no-duplicate-properties': true,
        // 指定颜色函数使用传统符号隔开
        'color-function-notation': 'legacy',
        // 函数 url 链接不允许 shceme relative
        'function-url-no-scheme-relative': true,
        // 可组合成一个属性的写法，不允许拆开书写
        'declaration-block-no-redundant-longhand-properties': true,
        // 不允许使用 !important
        'declaration-no-important': true,
        // 限制 id选择器的数目在一个选择器中
        'selector-max-specificity': ['0,5,2', {
            ignoreSelectors: ['/el-/', 'ant-', '/#app/']
        }],
        // 最多2个类型选择器
        'selector-max-type': 2,
        // 不允许使用通配符选择器
        'selector-max-universal': 0,
        // 在字体名称必须使用引号的地方使用引号，其他地方不能使用
        'font-family-name-quotes': 'always-where-required',
        // url 函数内部必须有引号
        'function-url-quotes': 'always',
        // 指定字符串引号为单引号
        'string-quotes': 'single',
        // 在规则的分号之前不允许有空格
        'at-rule-semicolon-space-before': 'never',
        // 首行不允许空行
        'no-empty-first-line': true,
        // 不允许使用 unicode 作为顺序标记
        'unicode-bom': 'never',
        'font-family-no-missing-generic-family-keyword': null
    },
};
