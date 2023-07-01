import React from 'react'

const inputDate_TailwindCSS_class =
    'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2' +
    ' appearance-none dark:text-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer'
const labelDate_TailwindCSS_class =
    'absolute text-sm text-gray-500 dark:text-gray-400 transform' +
    ' -translate-y-6 scale-x-180 top-2 -z-10 origin-[0] focus:font-large'

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
                        className={inputDate_TailwindCSS_class}
                    />
                </div>
                <h4>Contrato</h4>
                <div className='relative w-full mb-6 mt-8 group'>
                    <input
                        type='date'
                        name='entrada'
                        defaultValue={empregado?.entrada}
                        onChange={handleChange}
                        className={inputDate_TailwindCSS_class}
                    />
                    <label htmlFor='entrada' className={labelDate_TailwindCSS_class}>
                        Inicio do contrato
                    </label>
                </div>
                <div className='relative w-full mb-8 group'>
                    <input
                        type='date'
                        name='saida'
                        defaultValue={empregado?.saida}
                        onChange={handleChange}
                        className={inputDate_TailwindCSS_class}
                    />
                    <label htmlFor='saida' className={labelDate_TailwindCSS_class}>
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
                        className={inputDate_TailwindCSS_class}
                    />
                    <label htmlFor='feriasEntrada' className={labelDate_TailwindCSS_class}>
                        Inicio das Ferias
                    </label>
                </div>
                <div className='relative w-full group'>
                    <input
                        type='date'
                        name='feriasSaida'
                        defaultValue={empregado?.feriasSaida}
                        onChange={handleChange}
                        className={inputDate_TailwindCSS_class}
                    />
                    <label htmlFor='feriasSaida' className={labelDate_TailwindCSS_class}>
                        Final das Ferias
                    </label>
                </div>
            </div>
        </div>
    )
}

export default EmpregadoForm
