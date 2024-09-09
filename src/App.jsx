import { createContext, useState } from 'react';
import { AppConteinerStyled } from './AppStyled.jsx'
import GlobalStyle from './assets/global-styles.jsx'
import AppRouter from './router/AppRoutes.jsx'
import UserContext from './contexts/UserContext.js';


function App() {

  const [user, setUser] = useState({ token: '' });


  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <AppConteinerStyled>
          <AppRouter />
        </AppConteinerStyled>
      </UserContext.Provider>
    </>
  );
}

export default App
