(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{515:function(s,t,a){"use strict";a.r(t);var n=a(24),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"webpack-相关面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-相关面试题"}},[s._v("#")]),s._v(" webpack 相关面试题")]),s._v(" "),a("h2",{attrs:{id:"webpack-如何对-js-css-代码进行压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-如何对-js-css-代码进行压缩"}},[s._v("#")]),s._v(" webpack 如何对 js/css 代码进行压缩？")]),s._v(" "),a("p",[s._v("在 webpack 配置中设置 optimization 的 minimizer 属性，压缩 js 可以使用 terser-webpack-plugin 插件，插件内部使用的就是 terser 来实现对 js 代码的压缩，对 css 代码可以使用 css-minimizer-webpack-plugin 来对 css 代码进行压缩，插件内部使用 cssnano 优化和压缩 CSS。")]),s._v(" "),a("h2",{attrs:{id:"webpack-中-hash、chunkhash、contenthash-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-中-hash、chunkhash、contenthash-区别"}},[s._v("#")]),s._v(" webpack 中 hash、chunkhash、contenthash 区别")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("hash:")]),s._v(" 是跟整个项目的构建相关，只要项目里有文件更改，整个项目构建的 hash 值都会更改，并且全部文件都共用相同的 hash 值")]),s._v(" "),a("li",[a("strong",[s._v("chunkhash:")]),s._v(" 是针对 entry 的每一个入口文件，独立的 hash。如果 entry 里面的其中一个文件内容改变，只会改变这个入口文件 build 之后的文件名，而不会影响到其他文件。")]),s._v(" "),a("li",[a("strong",[s._v("contenthash:")]),s._v(" 是针对文件内容级别的，文件自身的内容改变 hash 值才会发生变化。")])]),s._v(" "),a("h2",{attrs:{id:"webpack-配置中用过哪些-loader-都有什么作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-配置中用过哪些-loader-都有什么作用"}},[s._v("#")]),s._v(" Webpack 配置中用过哪些 Loader ？都有什么作用？")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("file-loader:")]),s._v(" 把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)")]),s._v(" "),a("li",[a("strong",[s._v("url-loader:")]),s._v(" 与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)")]),s._v(" "),a("li",[a("strong",[s._v("style-loader:")]),s._v(" 把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS，对于生产版本，建议 mini-css-extract-plugin 提供的 loader 从 bundle 中提取 CSS")]),s._v(" "),a("li",[a("strong",[s._v("css-loader:")]),s._v(" 加载 CSS，支持模块化、压缩、文件导入等特性")]),s._v(" "),a("li",[a("strong",[s._v("sass-loader:")]),s._v(" sass-loader 的作用就是将该 css 文件翻译成纯 css 语法文件，以便后续打包处理。")]),s._v(" "),a("li",[a("strong",[s._v("less-loader:")]),s._v(" 与 sass-loader 作用相同用于处理 less 文件。")]),s._v(" "),a("li",[a("strong",[s._v("postcss-loader:")]),s._v(" 通过 postcss css 后处理器对 css 进行处理，如配合 autoprefixer 插件自动补齐 CSS3 前缀")]),s._v(" "),a("li",[a("strong",[s._v("vue-loader:")]),s._v(" 加载 Vue.js 单文件组件")]),s._v(" "),a("li",[a("strong",[s._v("source-map-loader:")]),s._v(" 加载额外的 Source Map 文件，以方便断点调试")])]),s._v(" "),a("h2",{attrs:{id:"webpack-配置中用过哪些-plugin-都有什么作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-配置中用过哪些-plugin-都有什么作用"}},[s._v("#")]),s._v(" Webpack 配置中用过哪些 Plugin ？都有什么作用？")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("define-plugin:")]),s._v(" 定义环境变量 如 process.env")]),s._v(" "),a("li",[a("strong",[s._v("html-webpack-plugin:")]),s._v(" 简化 HTML 文件创建 (依赖于 html-loader)")]),s._v(" "),a("li",[a("strong",[s._v("uglifyjs-webpack-plugin:")]),s._v(" 压缩 js 代码（不支持 ES6 压缩 ）")]),s._v(" "),a("li",[a("strong",[s._v("terser-webpack-plugin:")]),s._v(" 压缩 js 代码（支持压缩 ES6 ）")]),s._v(" "),a("li",[a("strong",[s._v("css-minimizer-webpack-plugin:")]),s._v(" 这个插件使用 cssnano 优化和压缩 CSS。")]),s._v(" "),a("li",[a("strong",[s._v("mini-css-extract-plugin:")]),s._v(" 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代 extract-text-webpack-plugin)")]),s._v(" "),a("li",[a("strong",[s._v("eslint-webpack-plugin:")]),s._v(" 该插件使用 eslint 来查找和修复 JavaScript 代码中的问题。")]),s._v(" "),a("li",[a("strong",[s._v("clean-webpack-plugin:")]),s._v(" 目录清理")])]),s._v(" "),a("h2",{attrs:{id:"loader-和-plugin-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader-和-plugin-有什么区别"}},[s._v("#")]),s._v(" Loader 和 Plugin 有什么区别？")]),s._v(" "),a("p",[s._v("Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。")]),s._v(" "),a("p",[s._v("Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。")]),s._v(" "),a("h2",{attrs:{id:"是否写过-loader-简单描述一下编写-loader-的思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否写过-loader-简单描述一下编写-loader-的思路"}},[s._v("#")]),s._v(" 是否写过 Loader？简单描述一下编写 loader 的思路？")]),s._v(" "),a("ul",[a("li",[s._v("loader 是使用在 node 环境的可以使用 node 的 api 或者引入自己安装的依赖")]),s._v(" "),a("li",[s._v("webpack 会根据配置的 test 属性将匹配到的文件转换成字符串或者 buffer 传递给 loader，当前 loader 处理完之后的结果会传递给下一个 loader。")]),s._v(" "),a("li",[s._v("webpack 提供了 loader-utils 和 schema-utils 工具库可以供使用")]),s._v(" "),a("li",[s._v("可以通过 exports.raw = true 告诉 Webpack 该 Loader 是否需要二进制数据")]),s._v(" "),a("li",[s._v("loader 提供了 this 访问 loader context（上下文）使用 loader 内部的方法，")]),s._v(" "),a("li",[s._v("如：this.callback() 一个可以同步或者异步调用的可以返回多个结果的函数。预期的参数是：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("err")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Error "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  sourceMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" SourceMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" any\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("如：this.async() 告诉 loader-runner 这个 loader 将会异步地回调。返回 this.callback。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("err")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Error "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  sourceMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" SourceMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" any\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("编写一个简单的 loader")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bar-loader.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  content "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// index.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world'")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("使用 loader")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("mode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'none'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("entry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("output")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bound.js'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v(".js$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/bar-loader.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[a("strong",[s._v("生成的 bound.js")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/******/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpackBootstrap")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" __webpack_exports__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world'")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/******/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"是否写过-plugin-简单描述一下编写-plugin-的思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否写过-plugin-简单描述一下编写-plugin-的思路"}},[s._v("#")]),s._v(" 是否写过 Plugin？简单描述一下编写 Plugin 的思路？")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("compiler 暴露了和 Webpack 整个生命周期相关的钩子")])]),s._v(" "),a("li",[a("p",[s._v("compilation 暴露了与模块和依赖有关的粒度更小的事件钩子")])]),s._v(" "),a("li",[a("p",[s._v("插件需要在其原型上绑定 apply 方法，才能访问 compiler 实例")])]),s._v(" "),a("li",[a("p",[s._v("传给每个插件的 compiler 和 compilation 对象都是同一个引用，若在一个插件中修改了它们身上的属性，会影响后面的插件")])]),s._v(" "),a("li",[a("p",[s._v("找出合适的事件点去完成想要的功能")]),s._v(" "),a("ul",[a("li",[s._v("emit 事件发生时，可以读取到最终输出的资源、代码块、模块及其依赖，并进行修改(emit 事件是修改 Webpack 输出资源的最后时机)")]),s._v(" "),a("li",[s._v("watch-run 当依赖的文件发生变化时会触发")])])]),s._v(" "),a("li",[a("p",[s._v("异步的事件需要在插件处理完任务时调用回调函数通知 Webpack 进入下一个流程，不然会卡住")])])]),s._v(" "),a("p",[a("strong",[s._v("编写一个简单的 loader")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// testPlugin.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack 插件其实是一个具有 apply 属性的 JavaScript 对象。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// apply 属性会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" pluginName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ConsoleLogOnBuildWebpackPlugin'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConsoleLogOnBuildWebpackPlugin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("compiler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    compiler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hooks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pluginName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("compilation")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack 构建过程开始！'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ConsoleLogOnBuildWebpackPlugin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[a("strong",[s._v("使用 plugin")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" testPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/testPlugin.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("mode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'none'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("entry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("output")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bound.js'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("testPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[a("strong",[s._v("运行 npx webpack 结果")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("linzhenbin@linzhenbindeAir test % npx webpack\nwebpack 构建过程开始！\nasset bound.js 127 bytes [compared for emit] (name: main)\n./src/index.js 43 bytes [built] [code generated]\nwebpack 5.70.0 compiled successfully in 35 ms\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);