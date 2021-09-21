/* eslint-disable multiline-ternary */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { upperFirts } from '../../util/strings'
import { MainContainer, Tag, TagList } from '../styles'

const Pokemon = () => {
  const [id] = useState(useParams().id)
  const [pokemon, setPokemon] = useState(null)
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then(response => {
        console.log(response.data)
        setPokemon(response.data)
      })
  }, [id])
  return (
    <MainContainer>
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
        </>
      ) : (
        <p>Pokemon no encontrado</p>
      )}
    </MainContainer>
  )
}

export default Pokemon
