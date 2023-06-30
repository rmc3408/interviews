import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BackButton } from '../components/AddButton'

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

    let handleChange = (value) => {
        getEmpregado((emp) => ({ ...emp, nome: value }))
    }
    console.log(empregado)

    return (
        <div className='note'>
            <div className='note-header'>
                <BackButton />
                {/* {empregadoId == 'new' ? (
                    <button onClick={createNote} disabled={empregado?.nome == ''}> Done</button>
                ) : (
                    <div>
                        <button onClick={deleteNote}>Delete</button>
                        <button onClick={updateNote}>Update</button>
                    </div>
                )} */}
            </div>
            
            <div className="relative z-0 w-full mb-6 group">
      <input type="date" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
            <input type="date"
                onChange={(e) => handleChange(e.target.value)}
                value={empregado?.nome}
                placeholder="Search..." />
                
            
        </div>
    )
}

export default EmpregadoPage
