import { PokeBall } from "./types";


export const newPokemon: PokeBall = {
  id: 699,
  types: [{ type: { name: 'rock' } }],
  name: 'diablo',
  sprites: { front_default: 'image_url' },
  base_experience: 104,
  height: 27,
  weight: 2250,
  abilities: [{ ability: { name: 'refrigerate' } }],
  stats: [
    {
      base_stat: 77,
      stat: {
        name: 'attack',
      },
    },
  ],
}