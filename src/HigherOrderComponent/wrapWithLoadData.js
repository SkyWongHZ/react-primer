import  React,{ Component} from 'react'

export default (WrappedComponent,name)=>{
  class NewComponent  extends   Components{
    constructor(){
      super()
      this.state={
        data:null
      }
    }
    componentDidMount() {
      let data=localStorage.getItem(name)
      this.state({data})
    }
    render(){
      return(
        <WrappedComponent data={this.state.data}></WrappedComponent>
      )
    }
  }
  return NewComponent
}