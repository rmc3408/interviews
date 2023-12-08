import { useState, ChangeEvent } from 'react'


const useInput = (name: string) => {
  const [ inputs, setInputs ] = useState(name)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setInputs(value)
  }

  return { inputs, onChange }
}

export default useInput