import React , { Component } from 'react';
import buttons from '../config/buttonsConfig';
import api from '../dataStore/stubAPI'  // NEW
import _ from 'lodash'

class Contact extends Component {
  state = {
    status : '',
    name: this.props.contact.name,
    address: this.props.contact.address,
    phone_number: this.props.contact.phone_number,
    previousDetails: {
      name: this.props.contact.name,
      address: this.props.contact.address,
      phone_number: this.props.contact.phone_number  
    }
  };
  shouldComponentUpdate(nextProps, nextState) {
    let currentContact = {
        name: this.state.name,
        address: this.state.address,
        phone_number: this.state.phone_number
    }
    let same = _.isEqual(nextProps.contact, currentContact)
    return !same || (nextState.status === 'edit' )
       || (nextState.status !== this.state.status) // nextState.status;
}
  handleEdit = () =>  this.setState({ status : 'edit'} );
  handleSave = (e) => {
      e.preventDefault();
      let updatedName = this.state.name.trim();
      let updatedAddress = this.state.address.trim();
      let updatedPhone_number = this.state.phone_number.trim();
      if (!updatedName || !updatedAddress || !updatedPhone_number ) {
          return ;
      }
      let {name, address, phone_number} = this.state ;
      this.setState({status : '',
          previousDetails: { name, address, phone_number  }
      })
      api.update( this.state.previousDetails.phone_number,
          updatedName , updatedAddress, updatedPhone_number )
  };         
  handleCancel = () => {
    let {name, address, phone_number} = this.state.previousDetails ;
    this.setState({ status : '', 
        name, address, phone_number } ) ;
  }; 
  handleNameChange = (e) =>  this.setState({name: e.target.value});
  handleAddressChange = (e) => this.setState({address: e.target.value});  
  handlePhoneNumChange = (e) =>  
      this.setState({phone_number: e.target.value});    
  handleDelete = () =>  this.setState({ status : 'del'} );
  handleConfirm = (e) => {
    e.preventDefault();
    this.props.deleteHandler(this.state.phone_number);
  };         
  render() {
      console.log(`Contact - ${this.props.contact.name}` )
        let activeButtons = buttons.normal ;
        let leftButtonHandler = this.handleEdit;
        let rightButtonHandler = this.handleDelete;
        if (this.state.status === 'edit' ) {
            activeButtons = buttons.edit ;
            leftButtonHandler = this.handleSave;
            rightButtonHandler = this.handleCancel ;
        }  else if (this.state.status === 'del' ) {
          activeButtons = buttons.delete ;
          leftButtonHandler = this.handleCancel ;
          rightButtonHandler = this.handleConfirm;
       }  
        return (
          <div className="col-sm-3" >
            <div className="panel panel-primary">
                <div className="panel-heading">
                    { this.state.name }
                </div>
                <div className="panel-body">
                {  this.state.status === 'edit' ? 
                    [ 
                    <input key='name' type="text" className="form-control"
                        value={this.state.name}
                        onChange={this.handleNameChange} />,
                    <input key='address'  type="text" className="form-control"
                        value={this.state.address}
                        onChange={this.handleAddressChange} />,
                    <input key='phone'  type="text" className="form-control"
                        value={this.state.phone_number}
                        onChange={this.handlePhoneNumChange} />
                    ] :
                    [
                        <p key={'name'}>{this.state.name}</p>,
                        <p key={'address'} >{this.state.address}</p>,
                        <p key={'phone_number'} >{this.state.phone_number}</p>,
                    ]   
                }        
                </div>
                <div className="panel-footer"> 
                  <div className="btn-group btn-group-justified" role="group" aria-label="...">
                    <div className="btn-group" role="group">
                        <button type="button" 
                            className={'btn ' + activeButtons.leftButtonColor} 
                            onClick={leftButtonHandler} >
                            {activeButtons.leftButtonVal}
                        </button>
                    </div>
                    <div className="btn-group" role="group">
                        <button type="button" 
                            className={'btn ' + activeButtons.rightButtonColor} 
                            onClick={rightButtonHandler} >
                            {activeButtons.rightButtonVal}
                        </button>  
                    </div>
                </div>                     
                </div>          
            </div>
          </div>
        ) ; 
      }
}

export default Contact;