export interface UserInterface{
    authFlag: boolean;
    email: string;
    phoneNumber: string;
    name: string;
    surname: string;
}
export interface PageInterface{
    pageAddres: string;
}
export interface RegistrationPageInterface{
    emailInputFailed: boolean;
    passwordInputFailed: boolean;
    repeatPasswordInputFailed: boolean;
}
export interface LoginPageInterface{
    emailInputFailed: boolean;
    passwordInputFailed: boolean;
}