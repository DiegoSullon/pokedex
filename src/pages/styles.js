import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    width: 80%;
  }
`
export const P = styled.p`
  margin-top: 0;
`
export const ResultSection = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
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
