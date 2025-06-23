import { useState } from 'react'
import type { FC, FormEvent } from 'react'
import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { DASHBOARD_PATH } from '../../utils/path'

interface LoginProps {
  setLocalStorage: (value: string) => void
}

const Login: FC<LoginProps> = ({ setLocalStorage }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      //TODO: add a proper error handling
      alert(`Please fill in both fields`)
      return
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user!
        user.getIdToken().then((token) => {
          setLocalStorage(token)
          navigate(DASHBOARD_PATH)
        })
      })
      .catch((error) => {
        //TODO: add a proper error handling
        alert(`Error to login ${error}`)
      })
  }

  return (
    <div className="flex items-center justify-center bg-[#222325] min-w-[40%]">
      <form
        onSubmit={handleSubmit}
        className="bg-transparent p-8 rounded shadow-md w-full max-w-sm border-[#C8E972] border-2"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#C8E972]">Login</h2>
        <div className="mb-4">
          <label className="block text-[#c7e972cb] mb-2 text-left" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C8E972] text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#c7e972cb] mb-2 text-left" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C8E972] text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#a8c55f] text-[#222325] py-2 rounded hover:bg-[#d7e972] transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login;