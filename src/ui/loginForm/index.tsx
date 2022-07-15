import React, { FC, useState, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {FormButton, Input, changeUserObj, useAppDispatch, useAppSelector, selectUserObj, changePageObj, UserInterface} from '../../';
import styled from 'styled-components';
import axios from 'axios';

export type RegistrationFormFields = {
  firstName: string;
};

function LoginForm(){
    interface FormValues{
      email:string;
      password:string;
    }
    const dispatch = useAppDispatch();
    const userObj = useAppSelector(selectUserObj);
    const { register, handleSubmit, getFieldState, getValues } = useForm<FormValues>({
      mode: 'onChange',
      
    });
    

    const [passwordShowFlag, setPasswordShowFlag] = useState(false);
    const [repeatPasswordShowFlag, setRepeatPasswordShowFlag] = useState(false);
    const [passwordVisibilityFlag, setPasswordVisibilityFlag] = useState(false);
    const [repeatPasswordVisibilityFlag, setRepeatPasswordVisibilityFlag] = useState(false);
    const [passwordsErrorFlag, setPasswordsErrorFlag] = useState('none');
    const [emailErrorFlag, setMailErrorFlag] = useState('none');
    const [buttonActiveFlag, setButtonActiveFlag] = useState(false);



    function authUser(values:FormValues){
        axios.post('http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/auth/login', {
            email: getValues('email'),
            password: getValues('password'),
        })
        dispatch(changeUserObj({authFlag: true}));
        
      
    } 

    function updateUserObjAndChangeButtonActiveFlag(){
      dispatch(changeUserObj({email: getValues('email'), password: getValues('password')}))
      if(!getValues('email').trim() || !getValues('password').trim()){
        setButtonActiveFlag(false);
      }
      else{
        setButtonActiveFlag(true);
      }
      if(!getValues('password').trim()){
        setPasswordShowFlag(true);
      }
    }
    useEffect(()=>{
      if(userObj.password.trim()) setPasswordShowFlag(true);
    }, [])

    




  return(

    <Form onMouseMove={updateUserObjAndChangeButtonActiveFlag} action='' method='post' onChange={updateUserObjAndChangeButtonActiveFlag} onSubmit={handleSubmit(authUser)}>
      <FormTitle>Авторизация</FormTitle>
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
                <FormButton text="Продолжить" active={buttonActiveFlag}/>
                <NotHaveAccountWrapper>
                    <NotHaveAccountText>Еще нет аккаунта?</NotHaveAccountText>
                    <NotHaveAccountLink onClick={()=>{dispatch(changeUserObj({createdFlag: false})); dispatch(changePageObj({pageAddres: 'firstStep'}))}}>Зарегистрироваться</NotHaveAccountLink>
                </NotHaveAccountWrapper>
                
    </Form>
  )
}



const Form = styled.form`
  font-family: Gilroy;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 12px 26px rgba(232, 233, 236, 0.57);
  padding: 80px 89px 60px 89px;
  border-radius: 20px;
`

const NotHaveAccountWrapper = styled.div`
    display: flex;
    margin-top: 36px;
    align-items: center;
`
const NotHaveAccountText = styled.p`
    font-size: 14px;
    font-weight: 400;
`
const NotHaveAccountLink = styled.a`
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

export default LoginForm;