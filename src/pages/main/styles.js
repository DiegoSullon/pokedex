import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
