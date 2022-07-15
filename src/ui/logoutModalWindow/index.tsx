import axios from "axios";
import styled from "styled-components";
import { useAppSelector, selectPageObj, useAppDispatch, changePageObj, changeUserObj } from "../../";



interface Props{
    
}

function LogoutModalWindow({}:Props){
    const pageObj = useAppSelector(selectPageObj);
    const dispatch = useAppDispatch();

    function logout(){
        dispatch(changePageObj({pageAddres: 'secondStep'}));
        dispatch(changeUserObj({createdFlag: true, authFlag: false}));
        dispatch(changePageObj({logoutModalFlag: false}));
        axios.post('http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/auth/log-out', {
            headers: {
                Authorization: "Bearer" + localStorage.getItem('token'),
            }
        })
    }

    return(
        <ExternalWrapper>
            <ExitIcon src="./images/exit.svg" onClick={()=>dispatch(changePageObj({logoutModalFlag: false}))} />
            <AreYouSureLogout>Вы уверены что хотите выйти из аккаунта?</AreYouSureLogout>
            <BothButtonsWrapper>
                <Button color="#466EFA" bgColor="#DAE2FF" onClick={()=>dispatch(changePageObj({logoutModalFlag: false}))} >Отмена</Button>
                <Button color="white" bgColor="#466EFA" onClick={logout}>Выйти</Button>
            </BothButtonsWrapper>
        </ExternalWrapper>
    )
}


const ExitIcon = styled.img`
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    padding: 5px;
    :hover{
        opacity: 0.5;
    }
    @media(max-width: 400px){
        display: none;
    }
`

const AreYouSureLogout = styled.p`
    font-weight: 500;
    font-size: 22px;
    color: #0B1332;
    position: absolute;
    width: 70%;
`

const ExternalWrapper = styled.div`
    top:50%;
    left:50%;
    transform:translate(-50%, -50%); 
    position: absolute;
    border-radius: 20px;
    z-index: 6;   
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 24px;
    @media(max-width: 400px){
        position: fixed;
        width: 100%;
        border-radius: 32px 32px 0px 0px;
        text-align: center;
        align-items: center;
        transform:translate(-50%, 100%); 
    }
`

const BothButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 85px;
    @media(max-width: 340px){
        margin-top: 100px;
    }
`


interface ButtonProps{
    bgColor: string;
    color: string;
}

const Button = styled.button<ButtonProps>`
    font-family: Gilroy;
    cursor: pointer;
    background-color: ${props=>props.bgColor};
    color: ${props=>props.color};
    border: none;
    font-size: 15px;
    font-weight: 600;
    padding: 18px 47px;
    border-radius: 10px;
    :nth-child(1){
        margin-right: 15px;
    }
    @media(max-width: 400px){
        font-size: 14px;
    }
`

export default LogoutModalWindow;