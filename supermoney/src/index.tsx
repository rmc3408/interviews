import ReactDOM from 'react-dom/client';
import MainPage from './pages/MainPage';
import { DebtProvider } from './context/DebtContext';
import './global.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<DebtProvider><MainPage /></DebtProvider>);
