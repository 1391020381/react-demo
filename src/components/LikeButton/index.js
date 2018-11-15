import React, {Component} from 'react'

/**
 * state 就是用来存储组件状态  在  constructor中初始化
 * setState方法由父类 Component所提供。当我们调用这个函数的时候,React.js会更新组件的状态 state,并且重新调用render方法,然后再把render方法所渲染的最新的内容显示在页面上。
 * 当我们要改变组件的状态的时候,不能直接用 this.state = xxx 必须使用 setState方法,它接受一个对象或者函数作为参数。
 * setState是异步更新的。
 * **/
class LikeButton extends Component {
  static defaultProps = {  // 默认配置 defaultProps
    likedText: '取消',
    unlikedText: '点赞'
  }

  constructor() {
    super()
    this.state = {isLiked: false, count: 0}
  }

  handleClickOnLikeButton() {
    this.setState({
      isLiked: !this.state.isLiked
    })
    // this.setState((prevState) => {  // setStat会合并
    //   return {count: 0}
    // })
    // this.setState((preState) => {
    //   return {count: preState.count + 1}
    // })
    // this.setState((prevState) => {
    //   return {count: prevState.count + 2}
    // })
  }

// 每个组件都可以接受一个 props参数,它是一个对象,包含了所有你对这个组件的配置。
  // 在使用一个组件的时候,可以把参数放在标签的属性当中,所有的属性都会作为 props 对象的键值
  // 组件内部就可以通过 this.props 来访问到这些配置参数了。
  // JSX 的表达式 插入可以在标签属性上使用。所以其实可以把任何类型的数据作为组件的参数,包括 字符串、数字、对象、数组、甚至函数等等。
  // props 不可变 组件的使用者可以主动地通过重新渲染的方式把新的 props传入组件当中。
  render() {
    // const likedText = this.props.likedText || '取消'
    // const unlikedText = this.props.unlikedText || '点赞'
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {/*{this.state.isLiked ? '取消' : '点赞'}*/}
        {this.state.isLiked ? this.props.likedText : this.props.unlikedText}
        {/*{this.state.count}*/}
      </button>
    )
  }
}

export default LikeButton
