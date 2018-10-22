import React,{Component} from 'react';

class DelModal extends Component {
    constructor(){
        super();
        this.state={
            isLoading:false
        }
    }



    onCancel = () =>{
        this.props.modalCancelled(true);
    }

    onAccept = () =>{
        this.setState({
            isLoading:true
        })
        this.props.modalAccepted(true);
    }
    render(){
        return (
            <div className="myModal">
            <div className="modalBox">
                <h3 >{this.props.delTitle}</h3>
                <p>{this.props.delMessage}</p>
                <div className="actionBtn">
                {
                    this.state.isLoading === true && ((<p className="modalBtn" onClick={this.onAccept}><div className="loader2"></div> </p>))
                }{
                    this.state.isLoading === false && ((<p className="modalBtn" onClick={this.onAccept}>OK </p>))
                }
                   
                    <p className="modalBtn" id="cancel" onClick={this.onCancel}>Cancel</p>
                </div>
            </div>
                
            </div>
        );
    }
   
}

export default DelModal;