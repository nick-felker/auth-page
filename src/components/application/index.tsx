import styled from "styled-components";
import {Header, selectUserObj, useAppSelector, UserInterface, Button, FAQelem} from '../../';


function Application(){

    const userObj:UserInterface = useAppSelector(selectUserObj);
    return(
        <ExternalWrapper>
            <Header/>
            <InnerWrapper>
                <MyProfileWrapper>
                    <MyProfileText>Мой профиль</MyProfileText>
                    <MyProfileEditWrapper>
                        <MyProfileEditIcon src="./images/edit.svg"/>
                        <MyProfileEditText>Редактировать</MyProfileEditText>
                    </MyProfileEditWrapper>
                </MyProfileWrapper>
                <UserDataWrapper>
                    <NameDataWrapper>
                        <NameDataTitle>Имя</NameDataTitle>
                        <NameDataText>{userObj.name || 'Н/Д'}</NameDataText>
                    </NameDataWrapper>
                    <SurnameDataWrapper>
                        <SurnameDataTitle>Фамилия</SurnameDataTitle>
                        <SurnameDataText>{userObj.surname || 'Н/Д'}</SurnameDataText>
                    </SurnameDataWrapper>
                    <PhoneDataWrapper>
                        <PhoneDataTitle>Телефон</PhoneDataTitle>
                        <PhoneDataText>{userObj.phoneNumber || 'Н/Д'}</PhoneDataText>
                    </PhoneDataWrapper>
                    <EmailDataWrapper>
                        <EmailDataTitle>Электронная почта</EmailDataTitle>
                        <EmailDataText>{userObj.email || 'Н/Д'}</EmailDataText>
                    </EmailDataWrapper>
                </UserDataWrapper>
                <ProductivityWrapper>
                    <ProductivityLeftSide>
                        <ProductivityTitle>Ваша продуктивность выросла!</ProductivityTitle>
                        <ProductivitySubTitle>За прошлую неделю вы выполнили 12 задач</ProductivitySubTitle>
                        <ProductivityButtonWrapper>
                            <Button active={true} text="Подробнее"/>
                        </ProductivityButtonWrapper>
                    </ProductivityLeftSide>
                    <ProductivityImageSide>
                        <ProductivityImage src="./images/productivityImage.svg"/>
                    </ProductivityImageSide>
                </ProductivityWrapper>
                <FAQWrapper>
                    <FAQTitle>Часто задаваемые вопросы</FAQTitle>
                    <FAQelemsWrapper>
                        <FAQelem 
                            title="Подписываете ли вы соглашение о неразглашении?" 
                            advancedInfo="Подписываете ли вы соглашение о неразглашении?. Подписываете ли вы соглашение о неразглашении"
                        />
                    </FAQelemsWrapper>
                    <FAQelemsWrapper>
                        <FAQelem 
                            title="Сколько займет создание MVP?" 
                            advancedInfo="Чтобы создать надежный продукт, вам необходимо создать его прототип, спроектировать, разработать и протестировать. На прохождение всех этих этапов у вас уйдет около 3 месяцев."
                        />
                    </FAQelemsWrapper>
                    <FAQelemsWrapper>
                        <FAQelem 
                            title="Предоставляете ли вы маркетинговые услуги?" 
                            advancedInfo="Чтобы создать надежный продукт, вам необходимо создать его прототип, спроектировать, разработать и протестировать. На прохождение всех этих этапов у вас уйдет около 3 месяцев."
                        />
                    </FAQelemsWrapper>
                    <FAQelemsWrapper>
                        <FAQelem 
                            title="Различается ли MVP от прототипов?" 
                            advancedInfo="Чтобы создать надежный продукт, вам необходимо создать его прототип, спроектировать, разработать и протестировать. На прохождение всех этих этапов у вас уйдет около 3 месяцев."
                        />
                    </FAQelemsWrapper>
                </FAQWrapper>
            </InnerWrapper>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    padding-bottom: 40px;
`

const InnerWrapper = styled.div`
    font-family: Gilroy;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;
`


const MyProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 110px;
`
const MyProfileText = styled.h1`
    font-weight: 600;
    font-size: 36px;
`
const MyProfileEditWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 40px;
    margin-top: 5px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`
const MyProfileEditIcon = styled.img`
    margin-right: 10px;
`
const MyProfileEditText = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #466EFA;
`

const UserDataWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 35px;
    margin-left: 110px;
`

const NameDataWrapper = styled.div`
    margin-right: 60px;
`
const NameDataTitle = styled.p`
    margin-bottom: 7px;
    color: #717583;
`
const NameDataText = styled.p`
    color: #0B1332;
    font-size: 16px;
    font-weight: 500;
`
const SurnameDataWrapper = styled.div`
    margin-right: 60px;
`
const SurnameDataTitle = styled.p`
    margin-bottom: 7px;
    color: #717583;
`
const SurnameDataText = styled.p`
    color: #0B1332;
    font-size: 16px;
    font-weight: 500;
`
const PhoneDataWrapper = styled.div`
    margin-right: 60px;
`
const PhoneDataTitle = styled.p`
    margin-bottom: 7px;
    color: #717583;
`
const PhoneDataText = styled.p`
    color: #0B1332;
    font-size: 16px;
    font-weight: 500;
`
const EmailDataWrapper = styled.div`
    margin-right: 60px;
`
const EmailDataTitle = styled.p`
    margin-bottom: 7px;
    color: #717583;
`
const EmailDataText = styled.p`
    color: #0B1332;
    font-size: 16px;
    font-weight: 500;
`

const ProductivityWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #F6F8FF;
    border-radius: 30px;
    align-items: center;
    margin: 70px auto;
    position: relative;
    width: 90%;
    padding: 5px 250px 0px 40px;
`
const ProductivityLeftSide = styled.div`
`
const ProductivityTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: #0B1332;
    margin-bottom: 15px;
`
const ProductivitySubTitle = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #0B1332;
    margin-bottom: 36px;
`
const ProductivityButtonWrapper = styled.div`

`

const ProductivityImageSide = styled.div`

`
const ProductivityImage = styled.img`

`
const FAQWrapper = styled.div`
    margin-left: 110px;
    position: relative;
    width: 90%;
`
const FAQTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
    color: #0B1332;
    margin-bottom: 36px;
`
const FAQelemsWrapper = styled.div`
    margin-bottom: 20px;
`

export default Application;