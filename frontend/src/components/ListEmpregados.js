import React from 'react'
import { Link } from 'react-router-dom'
import StepperTimeline from './TimeLine'

let getTitle = (nome) => {
    if (nome.length > 12) {
        return nome.slice(0, 45)
    }
    return nome
}

const ListEmpregados = ({ person, companyName }) => {
    const { id, nome, ...dates } = person

    return (
        <div className='notes-list-item'>
            <Link to={`/empregados/edit/${id}`}>
                <div className='empregado-details-timeline'>
                    <h3>Empregado: {getTitle(nome)}</h3>
                    <StepperTimeline dates={dates} companyName={companyName} />
                </div>
            </Link>
        </div>
    )
}

export default ListEmpregados
