import React, { useState, useLayoutEffect } from 'react'
import ListEmpregados from '../components/ListEmpregados'
import { AddButton, BackButton } from '../components/AddButton'
import { useParams } from 'react-router-dom'


const BASE_URL = 'http://localhost:4000/api'

const EmpregadoListPage = () => {
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
        <div className='notes'>
            <div className='notes-header'>
                <BackButton />
                <h2 className='notes-title'> Empregados da {empresa}</h2>
                <p className='notes-count'>{empregados.length}</p>
            </div>

            <div className='notes-list'>
                {empregados.map((person, index) => (
                    <ListEmpregados key={index} person={person} companyName={empresa} />
                ))}
            </div>
            <AddButton />
        </div>
    )
}

export default EmpregadoListPage
