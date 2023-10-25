import styled from "styled-components";

export const FilterStyle = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`
export const TextToDo = styled.p`
color: ${({ theme }) => theme.colors.acent};
font-size: 14px;
margin-bottom: 4px;
`

export const FilterInputStyle = styled.input`
width: 360px;
padding: 5px;
font-size: 16px;
color:${({ theme }) => theme.colors.inputColor};
border-radius: 15px;
border-color: ${({ theme }) => theme.colors.border};
outline: none;
&:hover {
    border-color: #25aae1;
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
}
`