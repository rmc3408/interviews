import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assets/add.svg'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

export const AddButton = () => {
    return (
        <Link to={'/new'} className='floating-button'>
            <AddIcon />
        </Link>
    )
}

export const BackButton = () => {
    const navigate = useNavigate();
    return <h3><ArrowLeft onClick={() => navigate(-1)} className='floating-button-back' /></h3>
}

