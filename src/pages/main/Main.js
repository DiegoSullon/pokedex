import React, { useState } from 'react'
import { MainContainer, ResultSection, P, Title } from '../styles'
import Pagination from '../../components/pagination/Pagination'
import CardLink from '../../components/cardLink/CardLink.jsx'
import Spinner from '../../components/spinner/Spinner'
import usePokedex from '../../hooks/usePokedex'

const Main = () => {
  const size = 20
  const [page, setPage] = useState(0)

  const { pokemons, totalElements, loading } = usePokedex({ page, size })

  const changePage = n => {
    setPage(n - 1)
  }
  return (
    <MainContainer>
      {loading && <Spinner />}
      <Title>Pokedex</Title>
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
              pokemonId={p.id}
              sprite={p.sprites.front_default}
              order={p.order}
              stats={p.stats}
              boxShadow
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
