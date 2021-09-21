export const getPokemonId = (url = 'hola') => {
  return url.match(/\/\d+\//)[0].replace(/\//g, '')
}
export const upperFirts = (string = 'hola') => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
