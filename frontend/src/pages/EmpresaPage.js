import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BackButton } from '../components/AddButton'

const BASE_URL = 'http://localhost:4000/api'

const EmpresaPage = () => {
    let { id: empresaId } = useParams()
    const navigate = useNavigate()
    let [empresas, setEmpresas] = useState(null)

    useEffect(() => {
        getEmpresa()
    }, [empresaId])

    let getEmpresa = async () => {
        if (empresaId === 'new') return

        let response = await fetch(`${BASE_URL}/empresas/${empresaId}`)
        let data = await response.json()
        setEmpresas(data)
    }

    let createNote = async () => {
        fetch(`${BASE_URL}/empresas/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(empresas),
        })
        navigate(-1)
    }

    let updateNote = async () => {
        fetch(`${BASE_URL}/empresas/update/${empresaId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(empresas),
        })
        navigate(-1)
    }

    let deleteNote = async () => {
        fetch(`${BASE_URL}/empresas/delete/${empresaId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        navigate(-1)
    }

    let handleChange = (value) => {
        setEmpresas((emp) => ({ ...emp, nome: value }))
    }

    return (
        <div className='note'>
            <div className='note-header'>
                <BackButton />
                {empresaId == 'new' ? (
                    <button onClick={createNote} disabled={empresas?.nome == ''}> Done</button>
                ) : (
                    <div>
                        <button onClick={deleteNote}>Delete</button>
                        <button onClick={updateNote}>Update</button>
                    </div>
                )}
            </div>
            <textarea
                onChange={(e) => {
                    handleChange(e.target.value)
                }}
                value={empresas?.nome}
            ></textarea>
        </div>
    )
}

export default EmpresaPage
