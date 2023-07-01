import React, { useContext } from 'react'
import './App.css'
import Header from './components/Header'
import EmpresaListPage from './pages/EmpresaListPage'
import EmpresaPage from './pages/EmpresaPage'
import ErrorPage from './pages/error-page'
import { createBrowserRouter, RouterProvider, redirect, Navigate } from 'react-router-dom'
import EmpregadoListPage from './pages/EmpregadoListPage'
import EmpregadoPage from './pages/EmpregadosPage'
import AuthContext from './context/AuthContext'
import LoginPage from './pages/LoginPage'

function App() {
    let { user } = useContext(AuthContext)

    const router = createBrowserRouter([
        {
            path: '/',
            element: <EmpresaListPage />,
            errorElement: <ErrorPage />,
            loader: () => (!user ? redirect('/login') : null),
        },
        {
            path: '/empregados/empresa/:id',
            element: <EmpregadoListPage />,
        },
        {
            path: '/empregados/:task/:id',
            element: <EmpregadoPage />,
        },
        {
            path: '/:id',
            element: <EmpresaPage />,
        },
        {
            path: '/login',
            element: <LoginPage />,
        },
        {
            path: '*',
            element: <Navigate to='/' replace />,
        },
    ])

    return (
        <>
            <div className='container dark'>
                <div className='app'>
                    <Header />
                    <RouterProvider router={router} />
                </div>
            </div>
        </>
    )
}

export default App
