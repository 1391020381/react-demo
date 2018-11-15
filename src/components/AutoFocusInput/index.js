import React, {Component} from 'react'
class AutoFocusInput extends Component{
 componentDidMount(){  // 记住一个原则：能不用 ref 就不用。
     this.input.focus()
 }
 render(){
     return (
         <input ref={(input)=>this.input = input}/>
     )
 }
}

export default AutoFocusInput