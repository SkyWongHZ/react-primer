import wrapWithLoadData from './wrapWithLoadData'

class  InputWithUserName  extends Component{
  render(){
    return(
      <input type="text" value={this.props.data}/>
    )
  }
}
InputWithUserName=wrapWithLoadData(InputWithUserName,'username')
export default InputWithUserName