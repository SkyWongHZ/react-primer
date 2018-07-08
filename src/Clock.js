import React, { Component } from 'react'
// import Comment from './Comment'

class Clock extends Component {
  constructor() {
    super()
    console.log('constructor')
    this.state = {
      date: new Date()
    }
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentWillUnmount() {
    clearInterval(this.timer)
    console.log('componentWillUnmount')
  }


  componentWillMount() {
    this.timer=setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1>
          <p>现在的时间是</p>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}
export default Clock
