1. 为了使得组件的可定制性更强，在使用组件的时候，可以在标签上加属性来传入配置参数。
2.组件可以在内部通过 this.props 获取到配置参数，组件可以根据 props 的不同来确定自己的显示形态，达到可配置的效果。
3.可以通过给组件添加类属性 defaultProps 来配置默认参数。
4. props 一旦传入，你就不可以在组件内部对它进行修改。但是你可以通过父组件主动重新渲染的方式来传入新的 props，从而达到更新的效果。