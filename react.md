# props
1. 为了使得组件的可定制性更强，在使用组件的时候，可以在标签上加属性来传入配置参数。
2. 组件可以在内部通过 this.props 获取到配置参数，组件可以根据 props 的不同来确定自己的显示形态，达到可配置的效果。
3. 可以通过给组件添加类属性 defaultProps 来配置默认参数。
4. props 一旦传入，你就不可以在组件内部对它进行修改。但是你可以通过父组件主动重新渲染的方式来传入新的 props，从而达到更新的效果。

# 生命周期
1. componentWillMount
2. componentDidMount
3. componentWillUnmount
* 一般来说,所有关于组件自身的状态的初始化工作都会放在 constructor里面做。
* 一些组件启动的动作,包括像Ajax数据的拉取操作、一些定时器的启动等,就可以放在 componentWillMount里面进行。
* 当时钟隐藏的时候,我们并没有清除定时器。setState只能在已挂载或者正在挂载的组件上调用,所以React.js会报错。componentWillUnmount 
* componentDidMount  依赖dom
## 更新阶段的组件生命周期
* 说白了就是 setState 导致 React.js 重新渲染组件并且把组件的变化应用到 DOM 元素上的过程，这是一个组件的变化过程。
1.  shouldComponentUpdate(nextProps, nextState)
2. componentWillReceiveProps(nextProps)
3. componentWillUpdate()
4. componentDidUpdate()
## ref
* 其实可以给组件标签也加上 ref,获取到的是这个 组件在 React.js 内部初始化的实例
* 能不用 ref 就不用

#props.children 和容器类组件
* props.children 获取 使用自定义组件的时候，可以在其中嵌套 JSX 结构。嵌套的结构在组件内部都可以通过 props.children 获取到

# dangerouslySetHTML 和 style 属性
* 出于安全考虑的原因（XSS 攻击），在 React.js 当中所有的表达式插入的内容都会被自动转义

# PropTypes 和组件参数验证
* npm install --save prop-types

# 高阶组件（Higher-Order Components） 
* 装饰者模式
* 高阶组件就是一个函数，传给它一个组件，它返回一个新的组件。
* 其实就是为了组件之间的代码复用。
* 高阶组件内部的包装组件和被包装组件之间通过 props 传递数据。
# context
* React.js 的 context 就是这么一个东西，某个组件只要往自己的 context 里面放了某些状态，这个组件之下的所有子组件都直接访问这个状态而不需要通过中间组件的传递。一个组件的 context 只有它的子组件能够访问，它的父组件是不能访问到的，你可以理解每个组件的 context 就是瀑布的源头，只能往下流不能往上飞。
# 纯函数
* 一个函数的返回结果只依赖与它的参数,并且在执行过程里面没有副作用,我们就把这个函数叫做纯函数。
# Redux
```
// 定一个 reducer
function reducer(state,action){
    // 初始化 state 和 switch case
}

// 生成 store
const store = createStore(reducer)

// 监听数据变化重新渲染页面
store.subscribe(()=> renderApp(store.getState()))

// 首次渲染页面
renderApp(store.getState())

// 后面可以随意 dispatch了,页面自动更新

store.dispatch()
```
* 高阶组件
  ```
function connect(a,b){
    return function(c){
        console.log(a,b,c)
        return 组件
    }
}
  ```