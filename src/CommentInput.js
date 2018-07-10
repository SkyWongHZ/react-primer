import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  }

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
  // handleSubmit=()=>{
  //   console.log('this.props.test',this.props.test)
  // }
  componentDidMount(){
    // console.log('this.props.test',this.props.test)
    this.textareaValue.focus()
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
            <textarea   value={this.state.content} onChange={this.handleContentChange} ref={textareaValue=>this.textareaValue=textareaValue}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={()=>this.props.handleSubmit({userName:this.state.userName,content:this.state.content})}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput