import React , { Component } from 'react';

class ContactForm extends Component {
    state = { name: '', address: '', phone_number : ''};
    handleSubmit = (e) => {
        e.preventDefault();
        let name = this.state.name.trim();
        let address = this.state.address.trim();
        let phone_number = this.state.phone_number.trim();
        if (!name || !address || !phone_number) {
            return;
        }
        this.props.addHandler(name,address,phone_number);
        this.setState({name: '', address: '', phone_number: ''});
    }

    handleNameChange = (e) =>  this.setState({name: e.target.value});
    handleAddressChange = (e) => this.setState({address: e.target.value});
    handlePhoneNumChange = (e) =>  this.setState({phone_number: e.target.value});

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                <div className="col-sm-2" >
                    <button type="button" className="btn btn-success"
                         onClick={this.handleSubmit} >Add Contact</button>
                </div>              
                <div className="col-sm-3" >
                  <input type="text" className="form-control" 
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.handleNameChange}
                  />
                </div>
                <div className="col-sm-3" >
                  <input type="text" className="form-control"
                      placeholder="Address"
                      value={this.state.address}
                      onChange={this.handleAddressChange}
                  />
                </div>
                <div className="col-sm-2" >
                  <input type="text" className="form-control" 
                      placeholder="Phone No."
                      value={this.state.phone_number}
                      onChange={this.handlePhoneNumChange}
                  />
                </div>                             
              </div>
            </div>
        );
    }
}
export default ContactForm;

