import styled from "styled-components";
import {Header, Input, FormButton} from '../../';
import { useForm, SubmitHandler } from 'react-hook-form'


interface Props{

}


function Registration(props:Props){

    
    interface FormValues{
        email:string;
        password:string;
        repeatPassword: string;
    }

    // const {
    //     register,
    //     handleSubmit,
    // } = useForm<RegistrationFormProps>();

    
    // const onSubmit: SubmitHandler<RegistrationFormProps> = data => console.log(data);
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);


    return(
        <>
            <Header/>
            <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
                <FormTitle>Регистрация</FormTitle>
                <EmailLabel>
                    <LabelText>Электронная почта</LabelText>
                    <Input type="text" placeholder="example@mail.ru" {...register('email')}/>
                </EmailLabel>
                <PasswordLabel>
                    <LabelText>Введите пароль</LabelText>
                    <Input type="password" placeholder="" {...register('password')}/>
                </PasswordLabel>
                <RepeatPasswordLabel>
                    <LabelText>Повторите пароль</LabelText>
                    <Input type="password" placeholder="" {...register('repeatPassword')}/>
                </RepeatPasswordLabel>
                <FormButton text="Продолжить" active={true}/>
                <AlreadyHaveAccountWrapper>
                    <HaveAccountText>Уже есть аккаунт?</HaveAccountText>
                    <HaveAccountLink>Войти</HaveAccountLink>
                </AlreadyHaveAccountWrapper>
            </RegistrationForm>
            
        </>
    )
}


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

const RegistrationForm = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px auto 0px auto;
    width: 444px;
    background: #FFFFFF;
    box-shadow: 0px 12px 26px rgba(232, 233, 236, 0.57);
    border-radius: 24px;
    font-family: Gilroy;
    padding: 80px 0px 68px 0px;
`
const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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


export default Registration;