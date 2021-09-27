import axios from 'axios'
import { useEffect, useState } from 'react'
import { getEvolutionChain } from '../util/utils'

const usePokemon = pokemonId => {
  const [pokemon, setPokemon] = useState(null)
  const [evolution, setEvolution] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
      .then(response => {
        axios.get(response.data.evolution_chain.url).then(res2 => {
          const evolutionChain = getEvolutionChain(res2.data.chain)
          evolutionChain.map(e => {
            setLoading(true)
            axios.get(e.url.replace('-species', '')).then(res3 => {
              setLoading(false)
              setEvolution(evol => {
                return [...evol, res3.data].sort((a, b) =>
                  a.id > b.id ? 1 : -1
                )
              })
            })
            return e
          })
        })
        setPokemon(response.data)
      })
  }, [])
  return { pokemon, evolution, loading }
}
export default usePokemon
