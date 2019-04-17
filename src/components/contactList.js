import React , { Component } from 'react';
import Contact from './contact' 

export default class ContactList extends Component {
  render() {
      let contactPanels =   this.props.contacts.map(
        (c) => <Contact key={c.phone_number} contact={c} 
                  deleteHandler={this.props.deleteHandler} /> 
    );
    return (
      <div className="container-fluid contacts">
        <div className="row">
            {contactPanels}  
        </div>
        </div>
      ) ;
   }
} 