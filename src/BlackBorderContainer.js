import React, { Component } from 'react'
import './BlackBorderContainer.css'

class BlackBorderContainer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    console.log('this.props.children', this.props.children)
    return (
        <div className="BlackBorderContainer-black">
          {this.props.children}
          学习下
        </div>
    )
  }
}
export default BlackBorderContainer