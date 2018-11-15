import React, {Component} from 'react'

/**
 * state 就是用来存储组件状态  在  constructor中初始化
 * setState方法由父类 Component所提供。当我们调用这个函数的时候,React.js会更新组件的状态 state,并且重新调用render方法,然后再把render方法所渲染的最新的内容显示在页面上。
 * 当我们要改变组件的状态的时候,不能直接用 this.state = xxx 必须使用 setState方法,它接受一个对象或者函数作为参数。
 * setState是异步更新的。
 * **/
class LikeButton extends Component {
  constructor() {
    super()
    this.state = {isLiked: false, count: 0}
  }

  handleClickOnLikeButton() {  // setStat会合并
    // this.setState({
    //   isLiked: !this.state.isLiked
    // })
    this.setState((prevState) => {
      return {count: 0}
    })
    this.setState((preState) => {
      return {count: preState.count + 1}
    })
    this.setState((prevState) => {
      return {count: prevState.count + 2}
    })
  }

  render() {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {/*{this.state.isLiked ? '取消' : '点赞'}*/}
        {this.state.count}
      </button>
    )
  }
}

export default LikeButton
