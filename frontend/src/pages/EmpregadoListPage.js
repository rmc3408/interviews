import React, { useState, useLayoutEffect, useContext } from 'react'
import ListEmpregados from '../components/ListEmpregados'
import { AddButton, BackButton } from '../components/AddButton'
import { useParams } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const BASE_URL = 'http://localhost:4000/api'

const EmpregadoListPage = () => {
    let { user } = useContext(AuthContext)
    let { id: empresaId } = useParams()
    let [empresa, setEmpresa] = useState()
    let [empregados, setEmpregados] = useState([])

    useLayoutEffect(() => {
        getEmpresa()
        getEmpregados()
    }, [])

    let getEmpregados = async () => {
        let response = await fetch(`${BASE_URL}/empregados/empresa/${empresaId}`)
        let data = await response.json()
        setEmpregados(data)
    }

    let getEmpresa = async () => {
        let response = await fetch(`${BASE_URL}/empresas/${empresaId}`)
        let data = await response.json()
        setEmpresa(data.nome)
    }

    return (
        <div className='empresas'>
            <div className='empresas-header'>
                <BackButton />
                <h2 className='empresas-title'> Empregados da {empresa}</h2>
                <p className='empresas-count'>{empregados.length}</p>
            </div>

            <div className='empresas-list'>
                {empregados.map((person, index) => (
                    <ListEmpregados key={index} person={person} companyName={empresa} />
                ))}
            </div>
            {user?.is_staff ? <AddButton empresaId={empresaId} /> : null}
        </div>
    )
}

export default EmpregadoListPage
