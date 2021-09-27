import axios from 'axios'
import { useEffect, useState } from 'react'

const usePokedex = ({ page = 0, size = 20 }) => {
  const [pokemons, setPokemons] = useState([])
  const [totalElements, setTotalElements] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon-species?offset=${page *
          size}&limit=${size}`
      )
      .then(response => {
        setTotalElements(response.data.count)
        setLoading(false)
        setPokemons(response.data.results)
      })
  }, [page])

  return { pokemons, totalElements, loading }
}

export default usePokedex
