import React from 'react'
import { Link } from 'react-router-dom'
import { upperFirts } from '../../util/utils'
import {
  AbsoluteDiv,
  Card,
  ImgContainer,
  Name,
  OrderTagContent,
  StatGroup,
  StatsGrid
} from './styles'

const CardLink = ({ name, pokemonId, sprite }) => {
  return (
    <Link to={`/${pokemonId}`}>
      <Card>
        <ImgContainer>
          <img src={sprite} alt='default' />
          <AbsoluteDiv>
            <OrderTagContent>
              <label htmlFor='order'>Order:</label>
              <span>30</span>
            </OrderTagContent>
          </AbsoluteDiv>
        </ImgContainer>
        <Name>{upperFirts(name)}</Name>
        <StatsGrid>
          <StatGroup>
            <label htmlFor='hp'>HP:</label>
            <span>30</span>
          </StatGroup>
          <StatGroup>
            <label htmlFor='hp'>HP:</label>
            <span>30</span>
          </StatGroup>
          <StatGroup>
            <label htmlFor='hp'>HP:</label>
            <span>30</span>
          </StatGroup>
          <StatGroup>
            <label htmlFor='hp'>HP:</label>
            <span>30</span>
          </StatGroup>
          <StatGroup>
            <label htmlFor='hp'>HP:</label>
            <span>30</span>
          </StatGroup>
          <StatGroup>
            <label htmlFor='hp'>HP:</label>
            <span>30</span>
          </StatGroup>
        </StatsGrid>
      </Card>
    </Link>
  )
}

export default CardLink
