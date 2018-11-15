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