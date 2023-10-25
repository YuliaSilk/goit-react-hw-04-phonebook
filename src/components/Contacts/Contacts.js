import { ContactItem, DeleteBtn } from "./Contacts.styled"
export const Contact = ({ contact: { id, name, number }, onDeleteContact}) => {
    return (
        <ContactItem>
            <p>{name}: {number}</p>
            <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
        </ContactItem>
    )
}

