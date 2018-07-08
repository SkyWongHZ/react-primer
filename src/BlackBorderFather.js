
import React, { Component } from 'react'
import BlackBorderContainer from './BlackBorderContainer.js'
class BlackBorderFather extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <p>111</p>
        <BlackBorderContainer
          content={
            <div>
              <div className='name'>My Name：Lucy</div>
              <p className='age'>
                My Age：<span>12</span>
              </p>
            </div>

          }
        >
        </BlackBorderContainer>
      </div>

    )
  }
}
export default BlackBorderFather