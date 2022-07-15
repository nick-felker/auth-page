import styled from "styled-components";
import { LoginForm, Header } from '../../';


interface Props{
    
}


function Login(props:Props){
    return(
        <>
            <Header/>
            <FormWrapper>
                <LoginForm/>
            </FormWrapper>
            
            
        </>
    )
}

const FormWrapper = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export default Login;