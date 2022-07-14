import React, { forwardRef } from 'react';
import { useState, InputHTMLAttributes, FC} from 'react';
import { FieldValues, useForm, UseFormRegister} from 'react-hook-form';
import styled from 'styled-components';
import {useAppSelector, selectRegistrationPageObj, changeRegistrationPageObj, useAppDispatch} from '../../';



interface PropsInput extends InputHTMLAttributes<HTMLInputElement>{
    type: string;
    placeholder: string;
    register?: any;
    name: string;
}

interface Props{
    placeholder: string;
    type: string;
}






// function Input({type, placeholder, register, name, ...rest}:PropsInput){
    
//     const [passwordSwitchFlag, setPasswordSwitchFlag] = useState(false);
//     const [passwordVisibilityFlag, setPasswordVisibilityFlag] = useState(false);
    
//     return(

//         // type === 'password' ? 
//         // <>
//         //     {passwordVisibilityFlag === true ? <Root id={name} name={name} ref={register} onChange={()=>setPasswordSwitchFlag(true)} type={'text'} placeholder={placeholder} {...rest}/> : <Root id={name} ref={register} name={name} onChange={()=>setPasswordSwitchFlag(true)} type={type} placeholder={placeholder} {...rest}/>}
//         //     {passwordSwitchFlag === false ? null : passwordVisibilityFlag === false ? <ShowPasswordButton onClick={()=>setPasswordVisibilityFlag(true)} src='./images/showPassword.svg'/> : <ShowPasswordButton onClick={()=>setPasswordVisibilityFlag(false)} src='./images/showedPassword.svg'/>}
//         // </>
//         // :
//         <>
//             <Root placeholder={placeholder} type={type} {...register(name)}/>
//         </>
        

//     )
// }



const Input = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => (
        <Root ref={ref} {...props}/>
    
    
));



const ShowPasswordButton = styled.img`
    width: 20px;
    position: absolute;
    margin-top: 33px;
    margin-left: 240px;
    height: 18px;
    cursor: pointer;
    z-index: 4;
    
`

const Root = styled.input`
    font-family: Gilroy;
    background: #F2F3F4;
    outline: none;
    border: none;
    
    padding: 14px 20px;
    ::placeholder{
        color: #717583;
        font-weight: 400;
        font-size: 14px;
    }
    border-radius: 10px;
    width: 280px;

`
export default Input;

