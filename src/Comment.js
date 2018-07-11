import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }
  constructor(){
    super()
    this.state={
      arr:[1,2,3]
    }
  
  }
  
  render () {
    const {arr}=this.state
    console.log('arr',arr)
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
      </div>
    )
  }
}

export default Comment
