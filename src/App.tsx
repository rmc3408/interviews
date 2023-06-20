
import { useRecoilState } from 'recoil';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { authState } from './state/subscription';


function App() {
  const [isLogged, _setLogin] = useRecoilState(authState)
  
  const authorizedUser = isLogged ?  <Dashboard /> : <Login />
  
  return <>{authorizedUser}</>

}

export default App;
