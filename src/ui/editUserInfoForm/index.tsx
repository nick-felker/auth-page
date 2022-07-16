import React, { FC, useState, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {FormButton, Input, changeUserObj, useAppDispatch, useAppSelector, selectUserObj, changePageObj, UserInterface, PageInterface, selectPageObj} from '../../';
import styled from 'styled-components';
import axios from 'axios';


function EditUserInfoForm(){
    interface FormValues{
      email:string;
      name: string;
      phone: string;
      surname: string;
    }
    const dispatch = useAppDispatch();
    const userObj = useAppSelector(selectUserObj);
    const { register, handleSubmit, getFieldState, getValues } = useForm<FormValues>({
      mode: 'onChange',
      
    });
    

    const [passwordShowFlag, setPasswordShowFlag] = useState(false);
    const [passwordVisibilityFlag, setPasswordVisibilityFlag] = useState(false);
    const [emailErrorFlag, setMailErrorFlag] = useState('none');
    const [buttonActiveFlag, setButtonActiveFlag] = useState(false);



    function editUser(values:FormValues){
        dispatch(changePageObj({editUserDataFlag: false}));
        axios.patch('http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/users', {
          headers: {
            Authorization: "Bearer" + localStorage.getItem('token'),
          }
        })
        .then(response=>{
          console.log(response);
        })
    } 

    function updateUserObj(){
      dispatch(changeUserObj({email: getValues('email'), surname: getValues('surname'), name: getValues('name'), phoneNumber: getValues('phone')}))

    }
    useEffect(()=>{
      if(userObj.password.trim()) setPasswordShowFlag(true);
    }, [])

    




  return(

    <Form action='' method='post' onChange={updateUserObj} onSubmit={handleSubmit(editUser)}>
                <NameLabel>
                    <LabelText>Имя</LabelText>
                    <Input
                      value={userObj.name}
                      type="text" 
                      placeholder={userObj.name} 
                      {...register('name',{
                        
                      }
                      )}
                    />  
                </NameLabel>
                <SurnameLabel>
                    <LabelText>Фамилия</LabelText>
                    <Input
                      value={userObj.surname}
                      type='text'
                      placeholder="Введите пароль" 
                      {...register('surname', {
                        
                      })}/>
                </SurnameLabel>
                <PhoneLabel>
                    <LabelText>Телефон</LabelText>
                    <Input
                      value={userObj.phoneNumber}
                      type='text'
                      placeholder={userObj.phoneNumber}
                      {...register('phone', {
                        
                      })}/>
                </PhoneLabel>
                <PhoneLabel>
                    <LabelText>Электронная почта</LabelText>
                    <Input
                      value={userObj.email}
                      type='email'
                      placeholder={userObj.email}
                      {...register('email', {
                        
                      })}/>
                </PhoneLabel>
                <FormButton text="Изменить" active={true}/>
    </Form>
  )
}



const Form = styled.form`
    display: flex;
    align-items: center;
    margin-top: 35px;
    margin-left: 110px;
    flex-wrap: wrap;
    @media(max-width: 900px){
        margin-left: 40px;
    }
    @media(max-width: 1310px){
      align-items: center;
    }
    @media(max-width: 800px){
      flex-direction: column;
      justify-content: center;
      margin: 40px auto 0px auto;
    }
    
`

const LabelText = styled.p`
    margin-bottom: 7px;
    color: #717583;
    font-weight: 400;
    font-size: 14px;
`

const NameLabel = styled.label`
    margin-right: 20px;
    margin-bottom: 20px;
    @media(max-width: 800px){
      margin-right: 0px;
    }

`
const SurnameLabel = styled.label`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 20px;
    @media(max-width: 800px){
      margin-right: 0px;
    }
    
`
const PhoneLabel = styled.label`
    display: flex;
    margin-right: 20px;
    flex-direction: column;
    margin-bottom: 20px;
    @media(max-width: 800px){
      margin-right: 0px;
    }
`


export default EditUserInfoForm;