import React, { Component } from 'react'
// import './BlackBorderContainer.css'

class BlackBorderHeader extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    console.log('this.props.children', this.props.children)
    return (
        <div className="BlackBorderContainer-black">
          这是header部分内容
        </div>
    )
  }
}
export default BlackBorderHeader