import {  useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactsForm/ContactsForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactsList/ContactsList";
import { ContactHeaderStyle, ContactsContainer, PhonebookContainer } from "./Contacts/Contacts.styled";
import { FormTittle } from "./ContactsForm/ContactsForm.styled";
import Notiflix from 'notiflix';


function addsaveContacts() {
  const saveContacts = localStorage.getItem('addContacts');
  if(saveContacts !== null) {
    return [];
  }
 return JSON.parse(saveContacts);
};

export const App = () => {
  const [contacts, setContacts] = useState(addsaveContacts);
  const [filter, setFilter] = useState('');

useEffect(() => {
  localStorage.setItem('addContacts', JSON.stringify(contacts));
}, [contacts]);

const addContact  = (newContact) => {
      if (contacts.some(contact => contact.name === newContact.name)){
    Notiflix.Notify.failure('this contact has already been added!');
    return
    }
  setContacts(prevState => [...prevState.contacts, {...newContact, id: nanoid()}],
 )};

const deleteContact = (contactId) => {
 setContacts(prevState =>  prevState.contacts.filter(contact => contact.id !== contactId))
}


const onChangeFilter = (evt) => {
  setFilter(evt.target.value);
};

const filterContacts = () => {
 return contacts.filter((contact) =>  {
  return  contact.name.toLowerCase().includes(filter.toLowerCase());
});
};


return (
  <PhonebookContainer>
    <FormTittle>Phonebook</FormTittle>
    <ContactForm 
    toAdd={addContact}/>
    <ContactsContainer>
    <ContactHeaderStyle>Contacts</ContactHeaderStyle>
    <Filter 
    onChange = {onChangeFilter} filterName={filter}/>
    <ContactList 
    contacts = {filterContacts}
    onDeleteContact={deleteContact}
    />
    </ContactsContainer>
  </PhonebookContainer>
)

}

// onChangeFilter = (evt) => {
  //   this.setState({ filter: evt.target.value });
  // };
  
  // filterContacts = () => {
  //   return this.state.contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(this.state.filter.toLowerCase());
  //   });
  // };
  




// const filterAddContacts = filterContacts();




// componentDidUpdate(_, prevState){
//   if(prevState.contacts !== this.state.contacts) {
//     localStorage.setItem('addContacts', JSON.stringify(this.state.contacts));
//   }
// };
  
// addContact = newContact => {
//     if (this.state.contacts.some(contact => contact.name === newContact.name)){
//     Notiflix.Notify.failure('this contact has already been added!');
//     return
//     }
//   this.setState(prevState => ({
//     contacts: [...prevState.contacts, {...newContact, id: nanoid()}],
//   }));

// };


// deleteContact = (contactId) => {
//   // console.log('deleteContact', contactId)
//  this.setState(prevState => ({
//   contacts: prevState.contacts.filter(contact => contact.id !== contactId)
//  }))
// }






