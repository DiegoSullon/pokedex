/* eslint-disable multiline-ternary */
import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import CardLink from '../../components/cardLink/CardLink.jsx'
import Spinner from '../../components/spinner/Spinner.jsx'
import usePokemon from '../../hooks/usePokemon.js'
import { upperFirts } from '../../util/utils'
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
  const { pokemon, evolution, loading } = usePokemon(useParams().id)

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
