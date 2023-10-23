
export function randomPokemonNumber(first: number, last: number) {
  return Math.ceil(Math.random() * (last - first)) + first
}

