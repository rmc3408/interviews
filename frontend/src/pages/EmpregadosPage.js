import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BackButton } from '../components/AddButton'
import EmpregadoForm from '../components/empregadoForm'

const BASE_URL = 'http://localhost:4000/api'

const EmpregadoPage = () => {
    let { id: empregadoId } = useParams()
    //const navigate = useNavigate()
    let [empregado, setEmpregado] = useState(null)

    useEffect(() => {
        getEmpregado()
    }, [empregadoId])

    let getEmpregado = async () => {
        if (empregadoId === 'new') return

        let response = await fetch(`${BASE_URL}/empregados/${empregadoId}`)
        let data = await response.json()
        setEmpregado(data)
    }

    // let createNote = async () => {
    //     fetch(`${BASE_URL}/empregado/create`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(empregado),
    //     })
    //     navigate(-1)
    // }

    // let updateNote = async () => {
    //     fetch(`${BASE_URL}/empregado/update/${empregadoId}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(empregado),
    //     })
    //     navigate(-1)
    // }

    // let deleteNote = async () => {
    //     fetch(`${BASE_URL}/empregado/delete/${empregadoId}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     navigate(-1)
    // }

    console.log(empregado)

    return (
        <div className='note'>
            <div className='note-header'>
                <BackButton />
                <h3>Empregado: {empregado?.nome}</h3>
                {empregadoId == 'new' ? (
                    <button 
                    // onClick={createNote} 
                    disabled={empregado?.nome == ''}> Done</button>
                ) : (
                    <div className='buttons-delete-update'>
                        <button 
                        // onClick={deleteNote}
                        >Delete</button>
                        <button 
                        // onClick={updateNote}
                        >Update</button>
                    </div>
                )}
            </div>
            <EmpregadoForm setEmpregado={setEmpregado} empregado={empregado} />
        </div>
    )
}

export default EmpregadoPage
