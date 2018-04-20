

# manage-system #

基于Vue.js 2.x系列 + iview2.x + webpack3 的后台管理系统解决方案。


## 前言 ##
之前公司用的是Vue + Element组件库做后台管理系统，
优点:Element UI 社区强大，是主流UI 框架，
缺点：

       1.Element UI api 相对繁琐，个别组件不是很全。

       2.之前后台管理系统构建打包速度慢，有性能问题；


该方案基于iview 2 组件库，
优势：

       1. api 简洁方便，适合快速迭代开发；

       2. webpack 构建打包速度快（加了很多优化）；

       3. 首页加载速度快；

       4. 架构清晰；



## 功能 ##
- [x] iview UI
- [x] 登录/注销
- [x] 表格
- [x] 表单
- [x] 图表
- [x] 富文本编辑器
- [x] markdown编辑器
- [x] 图片拖拽/裁剪上传
- [x] 支持切换主题色 :sparkles:


## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
	|-- src                              // 源码目录
	|       |-- views                    // 基础页面
	|		|-- views-router             // 主要路由页面
         	|-- vuex                     //  vuex 全局
	|
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明


## 启动步骤 ##

npm install                              // 安装依赖

npm run dev                              // 启动webpack server

npm run build                            // 打包输出到dist 目录