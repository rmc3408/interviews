import { FormEvent } from 'react'
import { useRecoilState } from 'recoil'
import { authState, userState } from '../state/subscription'
import useForm from '../components/useForm'
import authService from '../auth/auth.service'

function Login() {
  const [isLogged, setLogin] = useRecoilState<boolean>(authState)
  const [ _, setUser] = useRecoilState(userState)
  const { input, handleInput, resetForm } = useForm({
    username: '',
    email: 'admin@gmail.com',
    password: 'admin',
  })

  const handleAuthentication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setUser(input)
    try {
      await authService.login(input.email, input.password)
      setLogin(true)
    } catch (error) {
      console.error('User email not matches', error)
      
      //Automatic userRegistration
      authService.register(input.email)
    }
    resetForm()
  }

  return (
    <form onSubmit={handleAuthentication} >
      <fieldset >
      <input type="text" name="email" value={input.email} onChange={handleInput} />
      <br />
      <input type="password" name="password" value={input.password} onChange={handleInput} />
      <br />
      <h1>{isLogged}</h1>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
      <button type="submit">Add Product</button>
      </fieldset>
    </form>
  )
}

export default Login
