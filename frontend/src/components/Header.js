import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import AvatarText from './profile'

const Header = () => {
    let { user, logoutUser } = useContext(AuthContext)

    return (
        <div className='app-header'>
            <h1>Cadastros</h1>
            {user && (
                <div className='flex [&>*:first-child]:mr-6 align-middle'>
                    <AvatarText nome={user?.first_name} isAdmin={user?.is_staff} />
                    <div className='empresas-list-empregados'>
                        <a href='/' onClick={logoutUser}>
                            Logout
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header
