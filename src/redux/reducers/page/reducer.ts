import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { PageInterface } from "../../../types";





const initialState:PageInterface = {
    pageAddres: '',
}



export const pageReducer = createSlice({
    name: 'page',
    initialState,
    reducers:{
        changeUserObj: (state, {payload}: PayloadAction<PageInterface>)=>{
            return {...state, ...payload};
        },
    }
})

export const {changeUserObj}  = pageReducer.actions;
export default pageReducer.reducer;