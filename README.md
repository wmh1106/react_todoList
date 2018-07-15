# My Notes

## 目录

`tree -I node_modules -L 3 -C > README.md`

```html
├── README.md
├── node_modules
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── TodoList.js
│   └── index.js
└── yarn.lock
```

错误：`Uncaught TypeError: Cannot read property 'nodeName' of null at HTMLDocument.onMouseClick`chrom 插件引起的。
用隐身模式浏览没问题
