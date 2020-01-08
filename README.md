# 知乎日报

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 功能
 首页
 首页滚动到底部加载更多
 查看新闻详情
 新闻详情页载入下一篇
 收藏新闻
 查看评论
 短评展开和收缩
 编写评论页（不能发送到后台）
 侧边栏
 查看指定主题新闻
 查看指定主题下的编辑列表
 查看某个编辑的个人信息
 查看收藏新闻


### 目录结构
.
|-- src						// 源码目录
|	|-- assets				// 资源目录
|	|	|-- images			// 图片目录
|	|	|-- sass			// sass目录
|	|		|-- components		// 组件sass目录
|	|		|-- pages		// 页面sass目录
|	|-- components				// 组件
|	|	|-- LongComment.vue		// 长评组件
|	|	|-- NewsList.vue		// 新闻列表组件
|	|	|-- NewsMenu.vue		// 新闻详情底部菜单组件
|	|	|-- Share.vue			// 新闻详情分享弹框组件
|	|	|-- ShortComment.vue		// 短评组件
|	|	|-- Sidebar.vue			// 侧边栏组件
|	|	|-- Swipe.vue			// 轮播图组件
|	|-- pages				// 页面
|	|	|-- Collect.vue			// 收藏页面
|	|	|-- Comment.vue			// 评论页面
|	|	|-- Editor.vue			// 查看编辑个人信息页面
|	|	|-- EditorList.vue		// 编辑列表页面
|	|	|-- Index.vue			// 首页
|	|	|-- NewsDetail.vue		// 新闻详情页面
|	|	|-- ThemeDetail.vue		// 主题页面
|	|	|-- WriteCommnet.vue		// 编写评论页面
|	|-- router
|	|	|-- index.js			// 路由配置
|	|-- store
|	|	|-- index.js			// vuex配置
|	|-- App.vue				// 页面入口文件
|	|-- main.js				// 程序入口文件，加载各种公共组件
|-- public					// 静态文件目录
|	|-- css
|	|	|-- animate.css			// 动画css
|	|	|-- iconfont.css		// 图标字体css
|	|	|-- icontont.ttf		// 图标字体ttf
|	|	|-- iconfont.woff		// 图标字体woff
|	|	|-- news_qa_auto.css		// 页面详情内容css
|	|	|-- reset.css			// 统一浏览器样式css
|-- babel.config.js				// ES6语法编译配置
|-- .gitignore					// git忽略上传文件
|-- package.json				// 项目及工具的依赖配置文件
|-- README.md					// readme说明
|-- yarn.lock					// yarn文件
.