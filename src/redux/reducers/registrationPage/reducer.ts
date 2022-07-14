import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { RegistrationPageInterface } from "../../../types";





const initialState:RegistrationPageInterface = {
    emailInputFailed: false,
    passwordInputFailed: false,
    repeatPasswordInputFailed: false,
}



export const registrationPageReducer = createSlice({
    name: 'registrationPage',
    initialState,
    reducers:{
        changeRegistrationPageObj: (state, {payload}: PayloadAction<RegistrationPageInterface>)=>{
            return {...state, ...payload};
        },
    }
})

export const {changeRegistrationPageObj}  = registrationPageReducer.actions;
export default registrationPageReducer.reducer;