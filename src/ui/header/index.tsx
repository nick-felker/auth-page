import styled from "styled-components";
import {useForm} from 'react-hook-form'
import {selectUserObj, useAppSelector, useAppDispatch, UserInterface} from '../../';

interface Props{
    
}


function Header(props:Props){
    const userObj: UserInterface = useAppSelector(selectUserObj);
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm();

    return(
        <ExternalWrapper>
            <Logo src="./images/logo.svg"/>
            {userObj.authFlag === false ? null : <UserNav/>}
            <RegisterForm>
                
            </RegisterForm>
        </ExternalWrapper>
    )
}



const RegisterForm = styled.form`

`

const UserNav = styled.div`
    width: 50px;
    height: 50px;
    background-color: yellow;
`

const ExternalWrapper = styled.div`
   padding: 26px 128px 26px 110px;
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid #F2F3F4;
`

const Logo = styled.img`

`

export default Header;