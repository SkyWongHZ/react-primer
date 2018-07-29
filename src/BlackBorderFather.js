
import React, { Component } from 'react'
import BlackBorderContainer from './BlackBorderContainer'
import BlackBorderHeader from './BlackBorderHeader'

class BlackBorderFather extends Component {
  // static childContextTypes = {
  //   themeColor: PropTypes.string
  // }

  constructor () {
    super()
    this.state = { themeColor: 'red' }
  }

  getChildContext () {
    return { themeColor: this.state.themeColor }
  }

  render () {
    return (
      <div>
        <BlackBorderContainer />
        <BlackBorderHeader />
      </div>
    )
  }
}


export default BlackBorderFather