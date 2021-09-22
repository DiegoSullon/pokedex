import React from 'react'
import { Link } from 'react-router-dom'
import { upperFirts } from '../../util/utils'
import { Card } from './styles'

const CardLink = ({ name, pokemonId }) => {
  return (
    <Link to={`/${pokemonId}`}>
      <Card>{upperFirts(name)}</Card>
    </Link>
  )
}

export default CardLink
