import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'

class CommentApp extends Component {
	constructor(){
		super()
		this.state={
			test:'hello  world'
		}
	}
	handleSubmit=()=>{
		alert('点击')
	}
	render() {
		return (

			<div className='wrapper'>
				<CommentInput />
				<CommentList  handleSubmit={this.handleSubmit} test={this.state.test}/>
			</div>

		)
	}
}

export default CommentApp