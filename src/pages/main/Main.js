import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MainContainer, ResultSection, P } from '../styles'
import Pagination from '../../components/pagination/Pagination'
import { getPokemonId } from '../../util/utils'
import CardLink from '../../components/cardLink/CardLink'
import Spinner from '../../components/spinner/Spinner'

const Main = () => {
  const size = 20
  const [page, setPage] = useState(0)
  const [pokemons, setPokemons] = useState([])
  const [totalElements, setTotalElements] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon-species?offset=${page}&limit=${size}`
      )
      .then(response => {
        setTotalElements(response.data.count)
        setLoading(false)
        setPokemons(response.data.results)
      })
  }, [page])
  const changePage = n => {
    setPage(n - 1)
  }
  return (
    <MainContainer>
      {loading && <Spinner />}
      <h1>Pokedex</h1>
      <P>
        Page {page + 1} of {parseInt(totalElements / size) + 1}
      </P>
      <Pagination
        pages={parseInt(totalElements / size) + 1}
        selected={page + 1}
        changePage={changePage}
      />
      <ResultSection>
        {pokemons &&
          pokemons.map(p => (
            <CardLink
              key={pokemons.indexOf(p)}
              name={p.name}
              pokemonId={getPokemonId(p.url)}
            />
          ))}
      </ResultSection>
      <Pagination
        pages={parseInt(totalElements / size) + 1}
        selected={page + 1}
        changePage={changePage}
      />
    </MainContainer>
  )
}

export default Main
