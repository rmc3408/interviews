export type PokeBall = {
  id?: number
  types: [{ type: { name: string } }],
  name: string,
  sprites: { front_default: string },
  base_experience: number,
  height: number,
  weight: number,
  abilities: [{ ability: { name: string } }],
  stats: [{
    base_stat: number,
    stat: {
      name: string,
    },
  }]
}