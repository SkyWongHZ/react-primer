import React, { Component } from 'react'
// import Header from './Header'
import Clock from './Clock'

class IndexCom extends Component {
    constructor() {
        super()
        
        this.state = {
            isShowHeader: true
        }
    }
   
    handleShowOrHide() {
        this.setState({
            isShowHeader: !this.state.isShowHeader
        })
    }

    render() {
       
            <div>
                {this.state.isShowHeader &&<Clock />}
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或者隐藏标题
          </button>
            </div>
       
    }
}
export default IndexCom