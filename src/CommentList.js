import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  
  render() {
    return (
      <div>{this.props.comments&&this.props.comments.map((comment, i) => {
        return (
          // <Comment comment={comment} key={i}></Comment>
          <Comment comment={1} key={i}></Comment>
        )
      })}</div>
    )
  }
}
export default CommentList
