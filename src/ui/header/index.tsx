import styled from "styled-components";
import {selectUserObj, useAppSelector, useAppDispatch, UserInterface} from '../../';

interface Props{
    
}


function Header(props:Props){
    const userObj: UserInterface = useAppSelector(selectUserObj);


    return(
        <ExternalWrapper>
            <Logo src="./images/logo.svg"/>
            {userObj.authFlag === false ? null : <UserNav/>}
        </ExternalWrapper>
    )
}


const UserNav = styled.div`
    width: 50px;
    height: 50px;
    background-color: yellow;
`

const ExternalWrapper = styled.div`
   padding: 26px 128px 26px 110px;
   display: flex;
   justify-content: space-between;
`

const Logo = styled.img`

`

export default Header;