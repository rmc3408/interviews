import React from 'react'
import { inputStyleClass, labelStyleClass } from '../utils/constants'


const EmpregadoForm = ({ setEmpregado, empregado }) => {
    let handleChange = (e) => {
        const { value, name } = e.target
        setEmpregado((emp) => ({ ...emp, [name]: value }))
    }

    return (
        <div>
            <h1></h1>
            <div className='relative z-0 w-full px-12 group'>
                <div className='relative w-full mb-6 mt-8 group'>
                    <h4>Nome do Empregado</h4>
                    <input
                        type='text'
                        name='nome'
                        value={empregado?.nome || ''}
                        onChange={handleChange}
                        className={inputStyleClass}
                    />
                </div>
                <h4>Contrato</h4>
                <div className='relative w-full mb-6 mt-8 group'>
                    <input
                        type='date'
                        name='entrada'
                        defaultValue={empregado?.entrada}
                        onChange={handleChange}
                        className={inputStyleClass}
                    />
                    <label htmlFor='entrada' className={labelStyleClass}>
                        Inicio do contrato
                    </label>
                </div>
                <div className='relative w-full mb-8 group'>
                    <input
                        type='date'
                        name='saida'
                        defaultValue={empregado?.saida}
                        onChange={handleChange}
                        className={inputStyleClass}
                    />
                    <label htmlFor='saida' className={labelStyleClass}>
                        Final do Contrato
                    </label>
                </div>
                <h4>Ferias</h4>
                <div className='relative w-full mb-6 mt-8 group'>
                    <input
                        type='date'
                        name='feriasEntrada'
                        defaultValue={empregado?.feriasEntrada}
                        onChange={handleChange}
                        className={inputStyleClass}
                    />
                    <label htmlFor='feriasEntrada' className={labelStyleClass}>
                        Inicio das Ferias
                    </label>
                </div>
                <div className='relative w-full group'>
                    <input
                        type='date'
                        name='feriasSaida'
                        defaultValue={empregado?.feriasSaida}
                        onChange={handleChange}
                        className={inputStyleClass}
                    />
                    <label htmlFor='feriasSaida' className={labelStyleClass}>
                        Final das Ferias
                    </label>
                </div>
            </div>
        </div>
    )
}

export default EmpregadoForm
