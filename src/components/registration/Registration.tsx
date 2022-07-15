import styled from "styled-components";
import {useAppSelector, selectPageObj , selectUserObj, UserInterface, FirstStep, SecondStep, PageInterface} from '../../';


function Registration(){
    const pageObj:PageInterface = useAppSelector(selectPageObj)
    return(
        <>
         {pageObj.pageAddres === 'firstStep' ? 
            <FirstStep/>
            :
            <SecondStep/>
        }
        </>
    )
}
export default Registration;