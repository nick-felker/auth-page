import styled from "styled-components";
import {Header, RegistrationForm, changePageObj, useAppDispatch, FillInfoForm} from '../../../';


interface Props{

}


function SecondStep(props:Props){
    const dispatch = useAppDispatch();

    return(
        <>
            <Header/>
            <GoToThePrevStepWrapper onClick={()=>dispatch(changePageObj({pageAddres: 'firstStep'}))}>
                <GoToThePrevStepButton src="./images/arrow.svg"/>
                <GoToThePrevStepText>Назад</GoToThePrevStepText>
            </GoToThePrevStepWrapper>
            <FormWrapper>
                <FillInfoForm/>
            </FormWrapper>
            
        </>
    )
}


const GoToThePrevStepWrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    margin-top: 140px;
    cursor: pointer;
    padding: 10px;
    :hover{
        opacity: 0.5;
    }
    margin-left: 90px;
    @media(max-width: 980px){
        margin-left: 50px;
        margin-top: 100px;
    }
    @media(max-width: 772px){
        justify-content: center;
        position: relative;
        margin: 40px 0px 0px 0px;
    }
`
const GoToThePrevStepButton = styled.img`
    margin-right: 10px;
`
const GoToThePrevStepText = styled.p`
    font-family: Gilroy;
    font-weight: 500;
    font-size: 14px;
    color: #6F7488;
`

const FormWrapper = styled.div`

    margin-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media(max-width: 772px){
        margin-top: 30px;
    }
`

export default SecondStep;