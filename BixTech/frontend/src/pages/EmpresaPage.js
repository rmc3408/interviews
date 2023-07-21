import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BackButton } from '../components/AddButton'
import AuthContext from '../context/AuthContext'
import { BASE_URL } from '../utils/constants'


const EmpresaPage = () => {
    let { id: empresaId } = useParams()
    let { user } = useContext(AuthContext)
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
        <div className='empresa'>
            <div className='empresa-header'>
                <BackButton />
                {empresaId == 'new'
                    ? user?.is_staff && <button onClick={createNote}>Done </button>
                    : user?.is_staff && (
                          <div className='buttons-delete-update'>
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
