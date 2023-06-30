import React, { useState, useEffect } from 'react'
import ListItemEmpresas from '../components/ListItemEmpresas'
import { AddButton } from '../components/AddButton'

const BASE_URL = 'http://localhost:4000/api'

const EmpresaListPage = () => {
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
        <div className='notes'>
            <div className='notes-header'>
                <h2 className='notes-title'>&#9782; Nome das Empresas</h2>
                <p className='notes-count'>{empresas.length}</p>
            </div>

            <div className='notes-list'>
                {empresas.map((empresa, index) => (
                    <ListItemEmpresas key={index} empresa={empresa} />
                ))}
            </div>
            <AddButton />
        </div>
    )
}

export default EmpresaListPage
