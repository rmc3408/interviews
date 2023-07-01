import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Button, Label } from 'flowbite-react';


const inputStyleClass =
'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2' +
' appearance-none dark:text-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer'
const LoginPage = () => {


    let navigate = useNavigate()
    let { loginUser, user } = useContext(AuthContext)

    useEffect(() => {
        navigate('/')
    }, [user])

    return (
        <div className='h-full'>
            <form onSubmit={loginUser} className='flex mt-16 mx-24 max-w-full flex-col justify-center items-center '>
                <div className='relative w-full mb-4 mt-8 group'>
                    <Label htmlFor='username' value='Username' />
                    <input type='text' name='username' id="username" className={inputStyleClass} />
                </div>
                <div className='relative w-full mb-16 mt-2 group'>
                    <Label htmlFor='password' value='Password' />
                    <input type='password' name='password' id="password" className={inputStyleClass} />
                </div>
                <Button type="submit" className='login-button'>Submit</Button>
            </form>
        </div>
    )
}

export default LoginPage
