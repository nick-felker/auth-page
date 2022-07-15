export interface UserInterface{
    authFlag?: boolean;
    email?: string;
    phoneNumber?: string;
    name?: string;
    surname?: string;
    password?: string;
    createdFlag?: boolean;
    repeatPassword?: string;
}
export interface PageInterface{
    logoutModalFlag?: boolean; 
    pageAddres?: string;
    editUserDataFlag?: boolean;
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