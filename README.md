## 基于hook useReducer构建全局的store

> 项目主要是用`useReducer`和`Context`简单实现了全局的数据流**

**默认配了less和lessloader @路径 router等一些简单的配置 没有引入Ant Design Ant Design Mobile等ui框架 那应该都没有任何难点**

- 这里的store模块化实现的比较粗略 大致是那个思想 是用type前缀用/区分当前模块 也就是dva脚手架redux的那种思想 /前是模块名 后是dispatch的方法名
- 目前还没有尝试去用action的异步处理 后续会补上
- 另外有一样redux的模板雏形 也是为了简单记录一下方便自己复用 每次重新搭建太繁琐 具体考虑用哪些库 看个人需要