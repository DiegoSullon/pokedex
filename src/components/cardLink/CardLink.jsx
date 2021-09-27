import React from 'react'
import { Link } from 'react-router-dom'
import { upperFirts, upperFirtsStat } from '../../util/utils'
import {
  AbsoluteDiv,
  Card,
  ImgContainer,
  Name,
  OrderTagContent,
  StatGroup,
  StatsGrid
} from './styles'

const CardLink = ({
  name,
  pokemonId,
  sprite,
  order,
  stats = [],
  boxShadow = false
}) => {
  return (
    <Link to={`/${pokemonId}`}>
      <Card style={boxShadow ? { boxShadow: '0 0 6px #3761a8' } : {}}>
        <ImgContainer>
          <img src={sprite} alt='default' />
          {order && (
            <AbsoluteDiv>
              <OrderTagContent>
                <label htmlFor='order'>Order:</label>
                <span>{order}</span>
              </OrderTagContent>
            </AbsoluteDiv>
          )}
        </ImgContainer>
        <Name>{upperFirts(name)}</Name>
        <StatsGrid>
          {stats &&
            stats.map(s => (
              <StatGroup key={s.stat.name}>
                <label htmlFor={s.stat.name}>
                  {upperFirtsStat(s.stat.name)}:
                </label>
                <span id={s.stat.name}>{s.base_stat}</span>
              </StatGroup>
            ))}
        </StatsGrid>
      </Card>
    </Link>
  )
}

export default CardLink
