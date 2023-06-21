import { useRecoilState } from 'recoil';
import LoginPage from './pages/loginPage';
import Dashboard from './pages/dashboard';
import { authState } from './state/subscription';


function App() {
  const [isLogged, _] = useRecoilState<boolean>(authState)
  
  const authorizedUser = isLogged ?  <Dashboard /> : <LoginPage />
  
  return <>{authorizedUser}</>
}

export default App;
