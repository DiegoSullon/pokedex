/* eslint-disable multiline-ternary */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import CardLink from '../../components/cardLink/CardLink.jsx'
import Spinner from '../../components/spinner/Spinner'
import { getEvolutionChain, getPokemonId, upperFirts } from '../../util/utils'
import {
  Arrow,
  EvolutionSection,
  MainContainer,
  Tag,
  TagList,
  Title,
  Title2
} from '../styles'

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
          <Title>{upperFirts(pokemon.name)}</Title>
          <Title2>Groups</Title2>
          <TagList>
            {pokemon.egg_groups &&
              pokemon.egg_groups.map(group => (
                <Tag key={pokemon.egg_groups.indexOf(group)}>{group.name}</Tag>
              ))}
          </TagList>
          <Title2>Evolution</Title2>
          <EvolutionSection>
            {evolution &&
              evolution.map(e => {
                if (evolution.indexOf(e) === evolution.length - 1) {
                  return (
                    <div key={evolution.indexOf(e)} className='evolutionGroup'>
                      <CardLink name={e.name} pokemonId={getPokemonId(e.url)} />
                    </div>
                  )
                }
                return (
                  <div key={evolution.indexOf(e)} className='evolutionGroup'>
                    <CardLink name={e.name} pokemonId={getPokemonId(e.url)} />
                    <Arrow />
                  </div>
                )
              })}
          </EvolutionSection>
        </>
      ) : (
        <p>Pokemon no encontrado</p>
      )}
      <Link to='/'>
        <Tag>See all</Tag>
      </Link>
    </MainContainer>
  )
}

export default Pokemon
