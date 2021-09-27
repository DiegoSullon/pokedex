import axios from 'axios'
import { useEffect, useState } from 'react'

const usePokemon = (API = 'https://pokeapi.co/api/v2/pokemon/1/') => {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get(API).then(response => {
      setLoading(false)
      setPokemon(response.data)
    })
  }, [])

  return { pokemon, loading }
}

export default usePokemon
