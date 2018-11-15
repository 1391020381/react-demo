import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class Title extends Component {
  handleClickOnTitle() {
    console.log('Click on title')
  }

  render() {
    return (   // 这些 on* 的事件监听只能用在普通的HTML的标签上,而不能使用在组件标签上  和普通浏览器一样,事件监听函数会被自动传入一个event对象 这个对象和普通的浏览器event 对象所包含的方法和属性都基本一致。不同的是React.js中
      // event对象 并不是浏览器提供的,而是它自己内部所构建的。对外提供统一的API和属性。
      <h1 onClick={this.handleClickOnTitle}>React小书justdoit</h1>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <Title/>
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
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
