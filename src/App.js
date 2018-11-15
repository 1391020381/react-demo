import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class Title extends Component {
  render() {
    return (
      <h1>React小书justdoit</h1>
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
