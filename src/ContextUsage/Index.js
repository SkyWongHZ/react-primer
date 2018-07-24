import React, { Component } from 'react'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'
// import PropTypes from 'prop-types'

class Index extends Component {
  static childContextTypes={
    themeColor:PropTypes.string
  }
  constructor() {
    super()
    this.state = {
      themeColor:'green',
      color:'blue',
    }
  }
  getChildContext(){
    return{themeColor:this.state.themeColor}
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Container></Container>
        <Footer></Footer>
      </div>
    )

  }
}
export default Index