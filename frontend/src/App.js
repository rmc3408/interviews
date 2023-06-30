import React from 'react'
import './App.css'
import Header from './components/Header'
import EmpresaListPage from './pages/EmpresaListPage'
import EmpresaPage from './pages/EmpresaPage'
import ErrorPage from './pages/error-page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EmpregadoListPage from './pages/EmpregadoListPage'
import EmpregadoPage from './pages/EmpregadosPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <EmpresaListPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/empregados/empresa/:id',
        element: <EmpregadoListPage />,
    },
    {
        path: '/empregados/edit/:id',
        element: <EmpregadoPage />,
    },
    {
        path: '/:id',
        element: <EmpresaPage />,
    },
])

function App() {
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
