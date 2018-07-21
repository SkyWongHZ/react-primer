import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  static contextTypes={
    themeColor:PropTypes.string
  }
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div style={{color:'red'}}>
        这是头部内容
        <p>xxx</p>
      </div>
    ) 

  }
}
export default Header