import styled from 'styled-components'
export const Card = styled.div`
  box-shadow: 0 0 3px #3761a8;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 1.2em;
  color: white;
`
export const ImgContainer = styled.div`
  width: 90%;
`
export const AbsoluteDiv = styled.div`
  position: absolute;
`
export const Name = styled.h2`
  margin: 0;
  margin-top: -1em;
`
export const OrderTagContent = styled.div`
  position: relative;
  top: -14em;
  right: 0;
  display: flex;
  gap: 0.5em;
`
export const StatsGrid = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  margin-top: 1em;
  margin-bottom: 1em;
`
export const StatGroup = styled.div`
  display: flex;
  gap: 0.5em;
`
