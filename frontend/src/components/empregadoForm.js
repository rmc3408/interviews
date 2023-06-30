import React from 'react'

const EmpregadoForm = ({ setEmpregado, empregado }) => {

    let handleChange = (e) => {
      const { value, name } = e.target
      setEmpregado((emp) => ({ ...emp, [name]: value }))
    }

    return (
        <div>
          <h1></h1>
            <div className='relative z-0 w-full mb-6 mt-6 px-12 group'>
              <h3>Contrato</h3>
              <div className='relative w-full mb-8 mt-8 group'>
                    <input
                        type='date'
                        name='entrada'
                        value={empregado?.entrada}
                        onChange={handleChange}
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer'
                    />
                    <label
                        htmlFor='entrada'
                        className='absolute text-sm text-gray-500 dark:text-gray-400 
                    transform -translate-y-6 scale-x-180 top-2 -z-10 origin-[0] focus:font-large'
                    >Inicio do contrato</label>
                </div>
                <div className='relative w-full mb-16 group'>
                    <input
                        type='date'
                        name='saida'
                        value={empregado?.saida}
                        onChange={handleChange}
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer'
                    />
                    <label
                        htmlFor='saida'
                        className='absolute text-sm text-gray-500 dark:text-gray-400 
                        transform -translate-y-6 scale-x-180 top-2 -z-10 origin-[0] focus:font-large'
                    >Final do Contrato </label>
                </div>
                <h3>Ferias</h3>
                <div className='relative w-full mb-8 mt-8 group'>
                    <input
                        type='date'
                        name='feriasEntrada'
                        value={empregado?.feriasEntrada}
                        onChange={handleChange}
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer'
                    />
                    <label
                        htmlFor='feriasEntrada'
                        className='absolute text-sm text-gray-500 dark:text-gray-400 
                    transform -translate-y-6 scale-x-180 top-2 -z-10 origin-[0] focus:font-large'
                    > Inicio das Ferias</label>
                </div>
                <div className='relative w-full group'>
                    <input
                        type='date'
                        name='feriasSaida'
                        value={empregado?.feriasSaida}
                        onChange={handleChange}
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer'
                    />
                    <label
                        htmlFor='feriasSaida'
                        className='absolute text-sm text-gray-500 dark:text-gray-400 
                        transform -translate-y-6 scale-x-180 top-2 -z-10 origin-[0] focus:font-large'
                    >Final das Ferias </label>
                </div>
            </div>
        </div>
    )
}

export default EmpregadoForm
