import { AppConteinerStyled } from './AppStyled.jsx'
import GlobalStyle from './assets/global-styles.jsx'
import AppRouter from './router/AppRoutes.jsx'


function App() {
  return (
    <>
      <GlobalStyle />
      <AppConteinerStyled>
        <AppRouter />
      </AppConteinerStyled >
    </>
  )
}

export default App
