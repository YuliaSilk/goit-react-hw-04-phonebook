import styled from "styled-components";

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-left: 8px;
  gap: 16px;
  width: 360px;
  font-size: 16px;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    background: ${({ theme }) => theme.colors.inputColor}
  }
`;

export const DeleteBtn = styled.button`
cursor: pointer;
background: transparent;
border-radius: 15px;
border: 1px solid ${({ theme }) => theme.colors.border};
color: ${({ theme }) => theme.colors.text};
display: inline-block;
margin: 0.5rem 1rem;
padding: 0.5rem 0;
transition: all 200ms ease-in-out;
width: 100px;

&:hover {
  color: #fff;
  background: ${({ theme }) => theme.colors.error};
}
`;

export const ContactHeaderStyle = styled.h2`
font-size: 32px;
margin: 0;
margin-top: 16px;
color:${({ theme }) => theme.colors.header};
`;

export const ContactsContainer = styled.div`
display: flex;
width: 360px;
flex-direction: column;
gap: 8px;
`;

export const PhonebookContainer = styled.div`
width: 400px;
padding: 20px;
background-color: ${({ theme }) => theme.colors.backgraund};
border-radius: 15px;
`;