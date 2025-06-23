import { createRoot } from 'react-dom/client'
import './global.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomeLogin from './pages'
import Dashboard from './pages/dashboard'
import { store } from './services/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeLogin />} />
        <Route path="dashboard" element={<Dashboard />} />

        {/* <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route> */}
      </Routes>
    </BrowserRouter>
  </Provider>
)
