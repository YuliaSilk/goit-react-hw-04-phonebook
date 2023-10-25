import { Formik } from "formik";
import * as Yup from 'yup';
import { AddBtn, FormName, FormStyle, FormField, ErrMsg, FormContainer } from "./ContactsForm.styled";

const FormSchema = Yup.object().shape({
    name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' /-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Invalid name format')
    .min(2, 'Too short contacts name!')
    .max(15, 'Too long contacts name!')
    .required('Required'),

    number: Yup.string()
    .matches(/^\+?\d{1,4}([ ./-]?\d{1,3})?([ ./-]?\d{1,4})+$/, 'Invalid phone number format')
    .required('Required'),
  });
  

  export const ContactForm = ({ toAdd }) => {
    return (
     <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(values, actions) => {
            toAdd(values);
            actions.resetForm();
          // same shape as initial values
          console.log(values);
        }}
      >
        <FormStyle>
      
        <FormContainer>
       
        <FormName>Name 
          <FormField name="name" placeholder="Enter contact name" />
          <ErrMsg component="div" name="name" />
        </FormName>
        <FormName>Phone number
          <FormField name="number" placeholder="Enter phone number" type="tel"/>
          <ErrMsg component="div" name="number" />
        </FormName>

        <AddBtn type="submit">Add contact</AddBtn>
       
      </FormContainer>
      </FormStyle>
      </Formik>
    
  )};

