import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BackButton } from '../components/AddButton'
import EmpregadoForm from '../components/empregadoForm'
import AuthContext from '../context/AuthContext'

const BASE_URL = 'http://localhost:4000/api'

const EmpregadoPage = () => {
    let { id: empregadoId, task } = useParams()
    let { user } = useContext(AuthContext)
    const navigate = useNavigate()
    let [empregado, setEmpregado] = useState(null)

    useEffect(() => {
        getEmpregado()
    }, [empregadoId])

    let getEmpregado = async () => {
        if (task === 'create') return

        let response = await fetch(`${BASE_URL}/empregados/${empregadoId}`)
        let data = await response.json()
        setEmpregado(data)
    }

    let createNote = async () => {
        const novoEmpregado = {
            ...empregado,
            company: empregadoId,
        }

        fetch(`${BASE_URL}/empregados/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoEmpregado),
        })
        navigate(-1)
    }

    let updateNote = async () => {
        fetch(`${BASE_URL}/empregados/update/${empregadoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(empregado),
        })
        navigate(-1)
    }

    let deleteNote = async () => {
        fetch(`${BASE_URL}/empregados/delete/${empregadoId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        navigate(-1)
    }

    return (
        <div className='note'>
            <div className='note-header'>
                <BackButton />
                {task == 'create' ? (
                    <>
                        <h3>Inclua novo Empregado</h3>
                        { user?.is_staff && <button onClick={createNote}>Done</button>}
                    </>
                ) : (
                    <>
                        <h3>Empregado: {empregado?.nome} </h3>
                        { user?.is_staff && <div className='buttons-delete-update'>
                            <button onClick={deleteNote}>Delete</button>
                            <button onClick={updateNote}>Update</button>
                        </div>}
                    </>
                )}
            </div>
            <EmpregadoForm setEmpregado={setEmpregado} empregado={empregado} />
        </div>
    )
}

export default EmpregadoPage
