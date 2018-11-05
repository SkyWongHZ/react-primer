import React, { Component } from 'react'
// import Comment from './Comment'

class Header extends Component {
	constructor() {
		super()
		console.log('constructor')
		
	}
	componentWillMount() {
		console.log('componentWillMount')
	}
	componentDidMount() {
		console.log('componentDidMount')
	}
	componentWillUnmount(){
		console.log('componentWillUnmount')
	}
	render() {
		console.log('render')
		return (
			<div>react小书</div>
		)
	}
}
export default Header
