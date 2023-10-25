import { Contact } from "components/Contacts/Contacts";
import { ContactsList, ContactContainer } from './ContactsList.styled';
// import { ContactItem } from "components/Contacts/Contacts.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ContactContainer>
            <ContactsList>
               
                {contacts.map(contact => 
                   
                   <Contact
                    key={contact.id}
                    contact={contact}
                    onDeleteContact={onDeleteContact}
                    />
                    )}
                   
            </ContactsList>
        </ContactContainer>
    );
}

