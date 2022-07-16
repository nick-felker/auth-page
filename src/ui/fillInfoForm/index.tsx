import React, { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {FormButton, Input, changeUserObj, changePageObj,useAppDispatch, selectUserObj, useAppSelector} from '../../';
import styled from 'styled-components';
import axios from 'axios';

export type RegistrationFormFields = {
  firstName: string;
};

function FillInfoForm(){
    interface FormValues{
      name:string;
      surname:string;
      phone: string;
    }
    const dispatch = useAppDispatch();
    const userObj = useAppSelector(selectUserObj);
    const { register, handleSubmit, getValues } = useForm<FormValues>();
    
    const [nameErrorFlag, setNameErrorFlag] = useState('none');
    const [surnameErrorFlag, setSurnameErrorFlag] = useState('none');
    const [phoneErrorFlag, setPhoneErrorFlag] = useState('none');
    const [buttonActiveFlag, setButtonActiveFlag] = useState(false);
    function finallyRegistrateUser(values: FormValues){
        console.log(userObj);
        axios.post('http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/auth/register',{
            email: userObj.email,
            name: userObj.name,
            surname: userObj.surname,
            phone: userObj.phoneNumber,
            password: userObj.password,
        })
        .then(response=>{
            console.log(response);
        })
        dispatch(changeUserObj({authFlag: false, createdFlag: true}))
        
    } 

    function updateUserbj(){
        dispatch(changeUserObj({name: getValues('name'), surname: getValues('surname'), phoneNumber: getValues('phone')}))
        if(!getValues('name').trim() || !getValues('phone').trim() || !getValues('surname').trim()){
            setButtonActiveFlag(false);
        }
        else{
            setButtonActiveFlag(true);
        }
    }




  return(

    <Form onChange={updateUserbj} onSubmit={handleSubmit(finallyRegistrateUser)}>
      <FormTitle>Заполните данные о себе</FormTitle>
                <EmailLabel>
                    <LabelText>Имя</LabelText>
                    <Input 
                      value={userObj.name}
                      type="text" 
                      placeholder="Введите имя" {...register('name')}
                      error={nameErrorFlag}  
                    />
                </EmailLabel>
                <PasswordLabel>
                    <LabelText>Фамилия</LabelText>
                    <Input
                      value={userObj.surname}
                      type='text'
                      error={surnameErrorFlag}
                      placeholder="Введите фамилию" 
                      {...register('surname')}/>
                </PasswordLabel>
                <RepeatPasswordLabel>
                    <LabelText>Телефон</LabelText>
                    <Input
                      value={userObj.phone}
                      error={phoneErrorFlag}
                      type='tel'
                      placeholder='+7 (333)-333-33-33'
                      {...register('phone')}
                    />
                </RepeatPasswordLabel>
                <FormButton text="Продолжить" active={buttonActiveFlag}/>
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

export default FillInfoForm;