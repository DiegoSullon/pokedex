/* eslint-disable multiline-ternary */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import CardLink from '../../components/cardLink/CardLink'
import Spinner from '../../components/spinner/Spinner'
import { getEvolutionChain, getPokemonId, upperFirts } from '../../util/utils'
import { MainContainer, ResultSection, Tag, TagList } from '../styles'

const Pokemon = () => {
  const [id] = useState(useParams().id)
  const [pokemon, setPokemon] = useState(null)
  const [evolution, setEvolution] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then(response => {
        setLoading(false)
        axios.get(response.data.evolution_chain.url).then(res2 => {
          setEvolution(getEvolutionChain(res2.data.chain))
        //   console.table(getEvolutionChain(res2.data.chain))
        })
        setPokemon(response.data)
      })
  }, [])
  return (
    <MainContainer>
      {loading && <Spinner />}
      {pokemon ? (
        <>
          <h1>{upperFirts(pokemon.name)}</h1>
          <h2>Groups</h2>
          <TagList>
            {pokemon.egg_groups &&
              pokemon.egg_groups.map(group => (
                <Tag key={pokemon.egg_groups.indexOf(group)}>{group.name}</Tag>
              ))}
          </TagList>
          <h2>Evolution</h2>
          <ResultSection>
            {evolution &&
              evolution.map(e => (
                <CardLink
                  key={evolution.indexOf(e)}
                  name={e.name}
                  pokemonId={getPokemonId(e.url)}
                />
              ))}
          </ResultSection>
        </>
      ) : (
        <p>Pokemon no encontrado</p>
      )}
      <br />
      <Link to='/'>
        <Tag>See all</Tag>
      </Link>
    </MainContainer>
  )
}

export default Pokemon
