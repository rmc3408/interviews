import React, { useState, useEffect, useContext } from 'react'
import ListEmpresas from '../components/ListEmpresas'
import { AddButton } from '../components/AddButton'
import AuthContext from '../context/AuthContext'

const BASE_URL = 'http://localhost:4000/api'

const EmpresaListPage = () => {
    let { user } = useContext(AuthContext)
    let [empresas, setEmpresas] = useState([])

    useEffect(() => {
        getEmpresas()
    }, [])

    let getEmpresas = async () => {
        let response = await fetch(BASE_URL + '/empresas')
        let data = await response.json()
        setEmpresas(data)
    }

    return (
        <div className='empresas'>
            <div className='empresas-header'>
                <h2 className='empresas-title'>&#9782; Nome das Empresas</h2>
                <p className='empresas-count'>{empresas.length}</p>
            </div>

            <div className='empresas-list'>
                {empresas.map((empresa, index) => (
                    <ListEmpresas key={index} empresa={empresa} />
                ))}
            </div>
            {user?.is_staff && <AddButton />}
        </div>
    )
}

export default EmpresaListPage
