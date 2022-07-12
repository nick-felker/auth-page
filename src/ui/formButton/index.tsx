import styled from "styled-components";



interface Props{
    text: string;
    active: boolean;
}

function FormButton({text}:Props){
    return(
        
            <Root type={'submit'} value={text}/>
    
    )
}

const Root = styled.input`
    font-family: Gilroy;
    background-color: #466EFA;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    padding: 16px 99px;
    width: 280px;
`

export default FormButton;