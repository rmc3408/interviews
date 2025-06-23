import Login from '../modules/auth/login'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNavigate } from 'react-router'
import { useEffect, type FC } from 'react'
import { DASHBOARD_PATH } from '../utils/path'


const HomeLogin: FC = () => {
  const navigate = useNavigate()
  const [localStorageValue, setLocalStorage] = useLocalStorage('auth-login')

  useEffect(() => {
    // Check if the user is already logged in
    if (localStorageValue) {
      navigate(DASHBOARD_PATH)
    }
  }, [localStorageValue, navigate])
  
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[#222325]">
      <h1 className='text-white text-4xl font-bold mb-12'>Welcome to AnswerAI</h1>
      <Login setLocalStorage={setLocalStorage} />
    </section>
  )
}

export default HomeLogin
