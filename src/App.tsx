import styled from "styled-components";
import {Registration, selectUserObj, useAppSelector, UserInterface, Application, Login} from './';




interface Props{

}

function App(props:Props) {
  const userObj:UserInterface = useAppSelector(selectUserObj);
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  alert('Пришлось сделать функционал без работы с Rest API, при запросах выдавалась серверная ошибка 500. В итоге решил сделать регистрацию и авторизацию через store. Хотел сделать свой рест апи на php, но там возникла проблема с библиотекой jwt. Код этого алерта лежит в реактовской App.tsx, удалите его, чтобы было удобно смотреть сайт.')
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

