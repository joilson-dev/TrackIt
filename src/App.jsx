import { useState } from 'react';
import AppRouter from './router/AppRoutes.jsx'
import UserContext from './contexts/UserContext.js';
import { BrowserRouter } from 'react-router-dom';


function App() {

  const [user, setUser] = useState({ token: '' });

  return (
    <>

      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App
