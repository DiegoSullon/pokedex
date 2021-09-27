/* eslint-disable multiline-ternary */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import CardLink from '../../components/cardLink/CardLink.jsx'
import Spinner from '../../components/spinner/Spinner'
import { getEvolutionChain, upperFirts } from '../../util/utils'
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
  const [evolution, setEvolution] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then(response => {
        setLoading(false)
        axios.get(response.data.evolution_chain.url).then(res2 => {
          const evolutionChain = getEvolutionChain(res2.data.chain)
          evolutionChain.map(e => {
            axios.get(e.url.replace('-species', '')).then(res3 => {
              console.log(res3.data)
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
                      <CardLink
                        key={e.id}
                        name={e.name}
                        pokemonId={e.id}
                        sprite={e.sprites.front_default}
                      />
                    </div>
                  )
                }
                return (
                  <div key={evolution.indexOf(e)} className='evolutionGroup'>
                    <CardLink
                      key={e.id}
                      name={e.name}
                      pokemonId={e.id}
                      sprite={e.sprites.front_default}
                    />
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
