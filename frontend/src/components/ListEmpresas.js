import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (value) => {
    return new Date(value.createdAt).toLocaleDateString('pt-BR')
}

let getTitle = (empresa) => {
    if (empresa.nome.length > 12) {
        return empresa.nome.slice(0, 45)
    }
    return empresa.nome
}

const ListItemEmpresas = ({ empresa }) => {
    return (
        <div className='empresas-list-item'>
            <Link to={`/${empresa.id}`}>
                <div>
                    <h3>{getTitle(empresa)}</h3>
                    <p>
                        <span>Cadastrada desde {getTime(empresa)}</span>
                    </p>
                </div>
            </Link>
            <div className='empresas-list-empregados'>
                <Link to={`/empregados/empresa/${empresa.id}`}>Empregados</Link>
            </div>
        </div>
    )
}

export default ListItemEmpresas
