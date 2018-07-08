import React, { Component } from 'react'
// import Comment from './Comment'

class AutoFocusInput extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  componentDidMount(){
    console.log('a',this.a)
    console.log('this.a',this.a.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={a=>this.a=a} value="hello"/>
      </div>
    )
  }
}
export default AutoFocusInput
