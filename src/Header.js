import React, { Component } from 'react'
// import Comment from './Comment'

class Header extends Component {
	constructor() {
		super()
		console.log('constructor')
		
	}
	componentWillMount() {
		console.log('componentWillMounts')
	}
	componentDidMount() {
		console.log('componentDidMount')
	}
	componentWillUpdate(){
		console.log('componentWillUpdate')
	}
	render() {
		console.log('render')
		console.log(111);
		
		return (
			<div>
				<div>react小书</div>
				<div>单元测试</div>
			</div>
		)
	}
}
export default Header
