import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Button, Label  } from 'flowbite-react'
import { inputStyleClass, validEmailRegex, validPasswordRegex } from '../utils/constants'


const LoginPage = () => {
    let navigate = useNavigate()
    let { user, setToast, loginUser } = useContext(AuthContext)
    

    useEffect(() => {
        navigate('/')
    }, [user])

    const validateLogin = (e) => {
        let userPassed = [false, false]
        if (e.target.username.value.match(validEmailRegex)) {
            userPassed[0] = true
        }
        if(e.target.password.value.match(validPasswordRegex)) {
            userPassed[1] = true;
        }
        if (userPassed.every(x => x === true)) {
            loginUser(e)
        } else {
            setToast('error')
        }

    }

    return (
        <div >
            <form onSubmit={validateLogin} className='flex mt-16 mx-24 max-w-full flex-col justify-center items-center '>
                <div className='relative w-full mb-4 mt-8 group'>
                    <Label htmlFor='username' value='Username' />
                    <input type='text' name='username' id='username' className={inputStyleClass} required />
                </div>
                <div className='relative w-full mb-16 mt-2 group'>
                    <Label htmlFor='password' value='Password' />
                    <input type='password' name='password' id='password' className={inputStyleClass} required/>
                </div>
                <Button type='submit' className='login-button'>
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default LoginPage
