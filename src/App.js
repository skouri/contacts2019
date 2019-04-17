import React , { Component } from 'react';
import './App.css';
import Header from './components/header' 
import ContactForm from './components/contactForm' 
import ContactList from './components/contactList' 
import api from './dataStore/stubAPI'  // NEW

class App extends Component {
    addContact = (n, a, p) => {
        api.add(n,a,p) ;
        this.setState({});
   };
    deleteContact = (key) => {
        api.delete(key); 
        this.setState({});                          
    };
    render() {
        let contacts = api.getAll() ;    // NEW
        return (    
            <div className="jumbotron">
                <Header noContacts={contacts.length} />
                <ContactForm  addHandler={this.addContact} />
                <ContactList contacts={contacts} 
                      deleteHandler={this.deleteContact} />
            </div>                      
            );
    }
}

export default App;

