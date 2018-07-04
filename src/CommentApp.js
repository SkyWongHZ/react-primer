import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'

class CommentApp extends Component {
	constructor(){
		super()
		this.state={
			comments:[],
		}
	}
	ss=()=>{
		
	}
	handleSubmit=(params)=>{
		if(!params)return 
		if(!params.userName){ return alert('请输入用户名') }
		if(!params.content){ return alert('请输入文本内容') }
		const data= Object.assign({},params)
		this.state.comments.push(data)
		this.setState({
			comments:this.state.comments
		},()=>{
			console.log('this.state.comments',this.state.comments)
		})
	}
	render() {
		console.log('this.state.test',this.state.test)
		return (
			<div className='wrapper'>
				<CommentInput handleSubmit={this.handleSubmit} />
				<CommentList comments={this.state.comments} />
			</div>

		)
	}
}

export default CommentApp