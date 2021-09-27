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

const CardLink = ({ name, pokemonId, sprite, order, stats = [] }) => {
  return (
    <Link to={`/${pokemonId}`}>
      <Card>
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
