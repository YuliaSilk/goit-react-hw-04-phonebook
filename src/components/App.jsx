import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactsForm/ContactsForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactsList/ContactsList";
import { ContactHeaderStyle, ContactsContainer, PhonebookContainer } from "./Contacts/Contacts.styled";
import { FormTittle } from "./ContactsForm/ContactsForm.styled";
import Notiflix from 'notiflix';

// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    
    filter: '',
  }
componentDidMount() {
  const saveContacts = localStorage.getItem('addContacts');
  if(saveContacts !== null) {
     this.setState({ contacts: JSON.parse(saveContacts), });
  }
// console.log(saveContacts)
};

componentDidUpdate(_, prevState){
  if(prevState.contacts !== this.state.contacts) {
    localStorage.setItem('addContacts', JSON.stringify(this.state.contacts));
  }
};
  
addContact = newContact => {
    if (this.state.contacts.some(contact => contact.name === newContact.name)){
    Notiflix.Notify.failure('this contact has already been added!');
    return
    }
  this.setState(prevState => ({
    contacts: [...prevState.contacts, {...newContact, id: nanoid()}],
  }));

};

onChangeFilter = (evt) => {
  this.setState({ filter: evt.target.value });
};

filterContacts = () => {
  return this.state.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(this.state.filter.toLowerCase());
  });
};

deleteContact = (contactId) => {
  // console.log('deleteContact', contactId)
 this.setState(prevState => ({
  contacts: prevState.contacts.filter(contact => contact.id !== contactId)
 }))
}

render() {
  const filterContacts = this.filterContacts();
  // console.log(this.state.filter);
  return (
    <PhonebookContainer>
      <FormTittle>Phonebook</FormTittle>
      <ContactForm 
      toAdd={this.addContact}/>
      <ContactsContainer>
      <ContactHeaderStyle>Contacts</ContactHeaderStyle>
      <Filter 
      onChange = {this.onChangeFilter} filterName={this.filter}/>
      <ContactList 
      contacts = {filterContacts}
      onDeleteContact={this.deleteContact}
      />
      </ContactsContainer>
    </PhonebookContainer>
  )
}

}



