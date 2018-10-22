import React,{Component} from 'react'

class Authe extends Component {
  constructor(){
    super();

    this.state={
      infoCollected:''
  }
  this.handleData=this.handleData.bind(this);
  } 

handleData(data){
  this.setState({
    infoCollected: data
  })
}
}

export default Authe;