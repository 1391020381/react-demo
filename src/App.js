import React, { Component } from 'react';
import PropTypes from 'prop-types'
//import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton'
import List from './components/List'
import AutoFocusInut from './components/AutoFocusInput'
import Card from './components/Card'
import Content from './components/Content'
class Title extends Component {
  handleClickOnTitle(e) {
    console.log('Click on title', e.target.innerHTML, this)
  }

  render() {
    return (   // 这些 on* 的事件监听只能用在普通的HTML的标签上,而不能使用在组件标签上  和普通浏览器一样,事件监听函数会被自动传入一个event对象 这个对象和普通的浏览器event 对象所包含的方法和属性都基本一致。不同的是React.js中
      // event对象 并不是浏览器提供的,而是它自己内部所构建的。对外提供统一的API和属性。
      <h1 onClick={this.handleClickOnTitle.bind(this)}>React小书justdoit</h1>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <Title />
        <h2>This is Header</h2>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <h2>This is main content</h2>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        <h2>This is Footer</h2>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      likedText: '已赞',
      unlikedText: '赞'
    }
  }

  handleClickOnChange() {
    this.setState({
      likedText: '取消',
      unlikedText: '点赞'
    })
  }

  render() {
    return (
      <div>
        <Content></Content>
        <Header />
        <Main />
        <Footer />
        <LikeButton
          likedText={this.state.likedText}
          unlikedText={this.state.unlikedText}
        />
        <button onClick={this.handleClickOnChange.bind(this)}>
          修改 wordings
        </button>
        <List />
        <AutoFocusInut />
        <Card>
          <h2>React.js 小书</h2>
          <div>开源、免费、专业、简单</div>
          订阅：<input />

        </Card>
      </div>
    );
  }
}

export default App;
