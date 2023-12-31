import React, { createContext, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { BASE_URL, AUTH_URL } from '../utils/constants'

const AuthContext = createContext()


async function getTokenAccess(username, password) {
    let response = await fetch(AUTH_URL + '/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    })
    return await response.json()
}

async function getUserInfo(id) {
    let response = await fetch(BASE_URL + '/user/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return await response.json()
}

export const AuthProvider = ({ children }) => {
    let [ authTokens, setAuthTokens] = useState(null)
    let [ user, setUser] = useState(null)
    let [ toast, setToast] = useState(null)

    let loginUser = async (e) => {
        e.preventDefault()

        const tokenAccess = await getTokenAccess(e.target.username.value, e.target.password.value)
        setAuthTokens(tokenAccess)
        localStorage.setItem('authTokens', JSON.stringify(tokenAccess))

        const converted = jwt_decode(tokenAccess.access)
        const userInfo = await getUserInfo(converted.user_id)
        localStorage.setItem('user', JSON.stringify(userInfo))
        setUser(userInfo)
    }

    let logoutUser = () => {
        localStorage.removeItem('authTokens')
        localStorage.removeItem('user')
        setAuthTokens(null)
        setUser(null)
    }

    let updateToken = async () => {
        let response = await fetch(AUTH_URL + '/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh: authTokens?.refresh }),
        })
        let data = await response.json()

        setAuthTokens(data)
        localStorage.setItem('authTokens', JSON.stringify(data))
    }

    let contextData = {
        user: user,
        
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
        updateToken: updateToken,
        
        toast: toast,
        setToast: setToast
    }

    useEffect(() => {
        const localStorageToken = JSON.parse(localStorage.getItem('authTokens')) ?? null
        const localStorageUser = JSON.parse(localStorage.getItem('user')) ?? null
        setAuthTokens(localStorageToken)
        setUser(localStorageUser)
    }, [])

    return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
}

export default AuthContext
