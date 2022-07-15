import React, { FC, useState, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {FormButton, Input, changeUserObj, useAppDispatch, useAppSelector, selectUserObj, changePageObj, UserInterface} from '../../';
import styled from 'styled-components';
import axios from 'axios';

export type RegistrationFormFields = {
  firstName: string;
};

function RegistrationForm(){
    interface FormValues{
      email:string;
      password:string;
      repeatPassword: string;
    }
    const dispatch = useAppDispatch();
    const userObj = useAppSelector(selectUserObj);
    const { register, handleSubmit, getFieldState, getValues } = useForm<FormValues>({
      defaultValues: {
        email: userObj.email,
        password: userObj.password,
        repeatPassword: userObj.repeatPassword,
      },
      mode: 'onChange',
      
    });
    

    const [passwordShowFlag, setPasswordShowFlag] = useState(false);
    const [repeatPasswordShowFlag, setRepeatPasswordShowFlag] = useState(false);
    const [passwordVisibilityFlag, setPasswordVisibilityFlag] = useState(false);
    const [repeatPasswordVisibilityFlag, setRepeatPasswordVisibilityFlag] = useState(false);
    const [passwordsErrorFlag, setPasswordsErrorFlag] = useState('none');
    const [emailErrorFlag, setMailErrorFlag] = useState('none');
    const [buttonActiveFlag, setButtonActiveFlag] = useState(false);



    function registrateUser(values:FormValues){
      if(emailErrorFlag === 'ok' && passwordsErrorFlag === 'ok'){
        dispatch(changePageObj({pageAddres: 'secondStep'}));
        dispatch(changeUserObj({createdFlag: false, authFlag: false}))
      }
      return;
    } 

    function updateUserObjAndChangeButtonActiveFlag(){
      dispatch(changeUserObj({email: getValues('email'), password: getValues('password')}))
      if(!getValues('email').trim() || !getValues('password').trim() || !getValues('repeatPassword').trim()){
        setButtonActiveFlag(false);
      }
      else{
        setButtonActiveFlag(true);
      }
      if(!getValues('password').trim()){
        setPasswordShowFlag(true);
      }
      if(!getValues('repeatPassword').trim()){
        setRepeatPasswordShowFlag(true);
      }
      !getValues('email').trim() === true ? setMailErrorFlag('error') : setMailErrorFlag('ok');
      getValues('password') === getValues('repeatPassword') ? setPasswordsErrorFlag('ok') : setPasswordsErrorFlag('error');

    }
    useEffect(()=>{
      if(userObj.password.trim()) setPasswordShowFlag(true); setRepeatPasswordShowFlag(true);
    }, [])

  return(

    <Form action='' onChange={updateUserObjAndChangeButtonActiveFlag} onSubmit={handleSubmit(registrateUser)}>
      <FormTitle>Регистрация</FormTitle>
                <EmailLabel>
                    <LabelText>Электронная почта</LabelText>
                    <Input
                      value={userObj.email}
                      type="text" 
                      placeholder="example@mail.ru" 
                      {...register('email',{
                        
                      }
                      )}
                      error={emailErrorFlag}  
                    />  
                </EmailLabel>
                <PasswordLabel>
                    <LabelText>Введите пароль</LabelText>
                    <Input
                      value={userObj.password}
                      error={passwordsErrorFlag}
                      type={passwordVisibilityFlag === true ? 'text' : 'password'}
                      placeholder="Введите пароль" 
                      {...register('password', {
                        
                      })}/>
                      {passwordShowFlag === true ? <ShowPasswordButton
                        src={passwordVisibilityFlag === true ? './images/showedPassword.svg' : './images/hidePassword.svg'} 
                        onClick={()=>setPasswordVisibilityFlag(!passwordVisibilityFlag)}/> : null}
                </PasswordLabel>
                <RepeatPasswordLabel>
                    <LabelText>Повторите пароль</LabelText>
                    <Input
                      value={userObj.repeatPassword}
                      error={passwordsErrorFlag}
                      type={repeatPasswordVisibilityFlag === true ? 'text' : 'password'}
                      placeholder='Повторите пароль'
                      {...register('repeatPassword', {
                        
                      })}
                    />
                    {repeatPasswordShowFlag === true ? <ShowPasswordButton
                        src={repeatPasswordVisibilityFlag === true ? './images/showedPassword.svg' : './images/hidePassword.svg'} 
                        onClick={()=>setRepeatPasswordVisibilityFlag(!repeatPasswordVisibilityFlag)}/> : null}
                    {passwordsErrorFlag === 'error' ? <PasswordNotEqualErrorText>Пароли не совпадают</PasswordNotEqualErrorText> : null}
                    
                </RepeatPasswordLabel>
                <FormButton text="Продолжить" active={buttonActiveFlag}/>
                <AlreadyHaveAccountWrapper>
                    <HaveAccountText>Уже есть аккаунт?</HaveAccountText>
                    <HaveAccountLink onClick={()=>{dispatch(changeUserObj({createdFlag: true})); dispatch(changePageObj({pageAddres: 'secondStep'}))}}>Войти</HaveAccountLink>
                </AlreadyHaveAccountWrapper>
                
    </Form>
  )
}

const PasswordNotEqualErrorText = styled.p`
  font-weight: 400;
  font-size: 14;
  font-family: Gilroy;
  color: #F46666;
  margin-top: 5px;
  position: absolute;
  padding-top: 70px;
  z-index: 1;
`

const Form = styled.form`
  font-family: Gilroy;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 12px 26px rgba(232, 233, 236, 0.57);
  padding: 80px 89px 60px 89px;
  border-radius: 20px;
  @media(max-width: 486px){
    padding: 80px 30px 60px 30px;
  }
  @media(max-width: 350px){
    padding: 60px 15px 50px 15px;
  }
`

const AlreadyHaveAccountWrapper = styled.div`
    display: flex;
    margin-top: 36px;
    align-items: center;
`
const HaveAccountText = styled.p`
    font-size: 14px;
    font-weight: 400;
`
const HaveAccountLink = styled.a`
    color: #466EFA;
    font-weight: 500;
    margin-left: 10px;
    font-size: 14px;
    cursor: pointer;
`

const ShowPasswordButton = styled.img`
    width: 20px;
    position: absolute;
    margin-top: 33px;
    margin-left: 240px;
    height: 18px;
    cursor: pointer;
    z-index: 4;
    border: none;
    
`
const LabelText = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #0B1332;
    margin-bottom: 5px;
`


const FormTitle = styled.h1`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 48px;
`

const EmailLabel = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
`
const PasswordLabel = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
`
const RepeatPasswordLabel = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
`

export default RegistrationForm;