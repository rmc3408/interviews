import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const inputDate_TailwindCSS_class ='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer'
const labelDate_TailwindCSS_class ='absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-6 scale-x-180 top-2 -z-10 origin-[0] focus:font-large'

const LoginPage = () => {
    let navigate = useNavigate()
    let { loginUser, user } = useContext(AuthContext)

    useEffect(() => {
        navigate('/')
    }, [user])

    return (
        <div>
            <form onSubmit={loginUser}>
                <div className='relative mb-6 mt-8 group'>
                    <input type='text' name='username' className={inputDate_TailwindCSS_class} />
                    <label htmlFor='username' className={labelDate_TailwindCSS_class}>
                        UserName
                    </label>
                </div>
                <div className='relative mb-6 mt-8 group'>
                    <input type='password' name='password' className={inputDate_TailwindCSS_class} />
                    <label htmlFor='password' className={labelDate_TailwindCSS_class}>
                        Password
                    </label>
                </div>
                <input type='submit' />
            </form>
        </div>
    )
}

export default LoginPage
