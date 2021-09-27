import axios from 'axios'
import { useEffect, useState } from 'react'

const usePokedex = ({ page = 0, size = 20 }) => {
  const [pokemons, setPokemons] = useState([])
  const [totalElements, setTotalElements] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPokemons()
  }, [page])
  const getPokemons = () => {
    setPokemons([])
    setLoading(true)
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?offset=${page * size}&limit=${size}`
      )
      .then(response => {
        setTotalElements(response.data.count)
        response.data.results.map(p => {
          setLoading(true)
          axios.get(p.url).then(res => {
            setLoading(false)
            setPokemons(pokemons => {
              return [...pokemons, res.data].sort((a, b) =>
                a.id > b.id ? 1 : -1
              )
            })
          })
          return p
        })
      })
  }

  return { pokemons, totalElements, loading }
}

export default usePokedex
