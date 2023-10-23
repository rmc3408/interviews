import { randomPokemonNumber } from "utils/helper"

describe('Random pokemon must be in the range of first and last', () => { 

  test('should be between 1 and 807', () => {
    const first = 1
    const last = 807

    const result = randomPokemonNumber(first, last)
    expect(result).toBeLessThanOrEqual(last)
    expect(result).toBeGreaterThanOrEqual(first)
  })

  test('should include first', () => {
    const first = 1
    const last = 1

    const result = randomPokemonNumber(first, last)
    expect(result).toBeLessThanOrEqual(last)
    expect(result).toBeGreaterThanOrEqual(first)
  })
  
  test('should be last', () => {
    const first = 4
    const last = 5

    const result = randomPokemonNumber(first, last)
    expect(result).toBeLessThanOrEqual(last)
    expect(result).toBeGreaterThanOrEqual(first)
  })
})