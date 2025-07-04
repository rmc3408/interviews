import { AuthProvider } from './contexts/AuthProvider';
import { WelcomePage } from './pages';

// This is the MAIN entry point of the application
function App() {
  return (
    <AuthProvider>
      <WelcomePage />
    </AuthProvider>
  )
}

export default App;
