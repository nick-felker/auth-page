import styled from "styled-components";
import { useEffect, useState } from "react";
import {selectUserObj, useAppSelector, UserInterface} from '../../';

interface Props{
    
}



function UserNav(){
    const userObj:UserInterface = useAppSelector(selectUserObj);
    
    return(
       <UserNavWrapper>
            <UserName>{userObj.name}</UserName>
            <LogoutWrapper>
                <LogoutText>Выйти</LogoutText>
                
                <LogoutButton src="./images/logout.svg" />
            </LogoutWrapper>
       </UserNavWrapper>
    )
}


function Header(props:Props){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(()=>{
        setWindowWidth(window.innerWidth);
    }, [])
    const userObj: UserInterface = useAppSelector(selectUserObj);
    

    return(
        <ExternalWrapper>
            {windowWidth <= 450 ? <Logo draggable={false} src='./images/lonlyLogo.svg'/> : <Logo draggable={false} src="./images/logo.svg"/>}
            {userObj.authFlag === false ? null : <UserNav/>}
            
        </ExternalWrapper>
    )
}




const UserNavWrapper = styled.div`
    display: flex;
    align-items: center;
`
const UserName = styled.p`
    font-size: 16px;
    margin-right: 30px;
    margin-bottom: 3px;
    font-weight: 500;
`
const LogoutButton = styled.img`

`
const LogoutWrapper = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
`
const LogoutText = styled.p`
    color: #466EFA;
    padding-bottom: 3px;
    margin-right: 10px;
    font-family: 500;
`


const ExternalWrapper = styled.div`
   padding: 26px 128px 26px 110px;
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid #F2F3F4;
   @media(max-width: 900px){
    padding: 42px 22px 40px 40px;
   }
   @media(max-width: 430px){
    padding: 20px 15px 20px 20px;
   }
   font-family: Gilroy;
`

const Logo = styled.img`

`

export default Header;