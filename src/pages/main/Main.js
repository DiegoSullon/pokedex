import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Main = () => {
  const [page, setPage] = useState(0)
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species?offset=${page}&limit=20`)
      .then(response => {
        console.log(response.data.results)
        setPokemons(response.data.results)
      })
  }, [page])
  return (
    <main>
      <h1>Pokedex</h1>
      <section>{pokemons && pokemons.map(p => <div key={pokemons.indexOf(p)}>{p.name}</div>)}</section>
    </main>
  )
}

export default Main
