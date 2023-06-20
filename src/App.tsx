
import { useRecoilState } from 'recoil';
import LoginPage from './pages/initial';
import Dashboard from './pages/dashboard';
import { authState } from './state/subscription';


function App() {
  const [isLogged, _setLogin] = useRecoilState(authState)
  
  const authorizedUser = isLogged ?  <Dashboard /> : <LoginPage />
  
  return <>{authorizedUser}</>

}

export default App;
