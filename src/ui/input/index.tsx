import styled from 'styled-components';



interface Props{
    type: string;
    placeholder: string;
}


function Input({type, placeholder}:Props){
    return(
        <Root type={type} placeholder={placeholder}/>
    )
}

const Root = styled.input`
    font-family: Gilroy;
    background: #F2F3F4;
    outline: none;
    border: none;
    
    padding: 14px 20px;
    ::placeholder{
        color: #717583;
        font-weight: 400;
        font-size: 14px;
    }
    border-radius: 10px;
    width: 280px;

`

export default Input;