import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const P = styled.p`
  margin-top: 0;
`
export const ResultSection = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
`

export const Card = styled.div`
  /* border: 1px solid black; */
  box-shadow: 0 0 6px black;
  display: flex;
  justify-content: center;
  padding: 1em;
  font-weight: bold;
  font-size: 1.2em;
`
export const TagList = styled.ul`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  margin-top: 0;
`
export const Tag = styled.li`
  background-color: black;
  color: white;
  padding: 0.5em 1em;
  width: 100px;
  text-align: center;
  border-radius: 1em;
`
