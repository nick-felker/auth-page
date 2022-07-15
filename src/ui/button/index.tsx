import styled from "styled-components";



interface Props{
    text: string;
    active: boolean;
}

function FormButton({text, active }:Props){
    return(
        <>
            <Root active={active}>{text}</Root>
        </> 
    )
}


interface RootProps{
    active: boolean;
}

const Root = styled.button<RootProps>`
    font-family: Gilroy;
    background-color: #466EFA;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    cursor: ${props=>props.active === true ? 'pointer' : 'not-allowed'};
    font-size: 14px;
    padding: 16px 99px;
    width: 280px;
    opacity: ${props=>props.active === true ? '1' : '0.5'};
`

export default FormButton;