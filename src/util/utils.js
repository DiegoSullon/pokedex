export const upperFirts = (string = 'hola') => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export const upperFirtsStat = (string = 'hola') => {
  if (string === 'special-attack') return 'SA'
  if (string === 'special-defense') return 'SD'
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getEvolutionChain = (evolution = {}) => {
  const chain = []
  chain.push(evolution.species)
  if (!evolution.evolves_to) {
    return []
  }

  return chain.concat(getEvolutionChain(evolution.evolves_to[0]))
}
