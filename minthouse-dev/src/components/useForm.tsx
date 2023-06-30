import { useState } from 'react'

interface IInput {
  username: string
  email: string
  password: string
}

export default function useForm(initial: IInput) {
  const [input, setInput] = useState<IInput>(initial)

  function handleInput(e: any) {
    let { value, name } = e.target
    
    setInput({
      ...input,
      [name]: value,
    })
  }

  function resetForm() {
    const arrValues = Object.entries(input)
    arrValues.map((item) => (item[1] = ''))
    const clearedInput = Object.fromEntries(arrValues)
    setInput(clearedInput as IInput)
  }

  return { input, handleInput, resetForm }
}