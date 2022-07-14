import styled from "styled-components";
import {Header, RegistrationForm} from '../../../';



interface Props{

}


function FirstStep(props:Props){

    return(
        <>
            <Header/>
            <FormWrapper>
                <RegistrationForm/>
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


export default FirstStep;