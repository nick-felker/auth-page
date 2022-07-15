import styled from "styled-components";
import {Registration, selectUserObj, useAppSelector, UserInterface, Application, Login} from './';




interface Props{

}

function App(props:Props) {
  const userObj:UserInterface = useAppSelector(selectUserObj);

  return(
    <>
        {userObj.createdFlag === false ? 
          <Registration/>
          :
          userObj.authFlag === true ?
          <Application/>
          :
          <Login/>
        }
      
    </>
  )
            
}

 



export default App;

