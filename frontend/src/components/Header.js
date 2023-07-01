import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let { user, logoutUser } = useContext(AuthContext)
    
    return (
        <div className='app-header'>
            <h1>Empresas e Empregados</h1>
            { user && <a href="/" onClick={logoutUser} >Logout</a>}
        </div>
    )
}

export default Header
