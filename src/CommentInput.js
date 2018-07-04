import React, { Component } from 'react'

class CommentInput extends Component {
  constructor(){
    super()
    this.state={
      userName:'',
      content:'',
    }
  }
  handleUsernameChange=(e)=>{
    this.setState({
      userName:e.target.value
    })
  }
  handleContentChange=(e)=>{
    this.setState({
      content:e.target.value
    })
  }
  componentDidMount(){
    console.log('this.props.test',this.props.test)
  }
  render() {
    // console.log(this.props.handleSubmit)
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input  value={this.state.userName} onChange={this.handleUsernameChange}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content} onChange={this.handleContentChange} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.props.handleSubmit}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput