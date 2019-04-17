import React , { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 offset-md-3" >
            <div className="page-header">
              <h2>Contacts List <span className="badge"> {this.props.noContacts}</span>
             </h2>
            </div>
          </div>
        </div>
      </div>  
    ) ;
  }
}

export default Header;
