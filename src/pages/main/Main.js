import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, MainContainer, ResultSection } from './styles'

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
    <MainContainer>
      <h1>Pokedex</h1>
      <ResultSection>
        {pokemons &&
          pokemons.map(p => (
            <Card key={pokemons.indexOf(p)}>
              {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
            </Card>
          ))}
      </ResultSection>
    </MainContainer>
  )
}

export default Main
