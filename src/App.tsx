import styled from "styled-components";
import {Registration, selectUserObj, useAppSelector, UserInterface} from './';




interface Props{

}

function App(props:Props) {
  const userObj:UserInterface = useAppSelector(selectUserObj);

  return(
    <>
        {userObj.authFlag === true ? 
          <></>
          :
          <Registration/>

        }
      
    </>
  )
            
}

 



export default App;

