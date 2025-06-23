import { useState, useEffect } from 'react'

function getStorageValue(key: string) {
  // getting stored value
  const saved = localStorage.getItem(key)
  const initial = saved ? JSON.parse(saved) : null
  return initial
}

export const useLocalStorage = (key: string) => {
  const [localStorageValue, setLocalStorage] = useState(() => {
    return getStorageValue(key)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageValue))
  }, [key, localStorageValue, setLocalStorage])

  return [localStorageValue, setLocalStorage]
}
