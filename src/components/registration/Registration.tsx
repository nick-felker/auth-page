import styled from "styled-components";
import {useAppSelector, selectPageAddres , selectUserObj, UserInterface, FirstStep, SecondStep, PageInterface} from '../../';


function Registration(){
    const pageObj:PageInterface = useAppSelector(selectPageAddres)
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