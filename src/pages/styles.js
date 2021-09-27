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
export const Title = styled.h1`
  -webkit-text-stroke: 2px #3761a8;
  color: #feca1b;
  font-size: 4em;
`
export const Title2 = styled.h2`
  -webkit-text-stroke: 2px #3761a8;
  color: #feca1b;
  font-size: 3em;
  margin-top: 0;
`
export const P = styled.p`
  margin-top: 0;
`
export const ResultSection = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: 300px;
  justify-content: center;

  grid-gap: 1em;
  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 300px);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 300px);
  }
`
export const EvolutionSection = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  margin-bottom: 2em;
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-evenly;
  }
`
export const Arrow = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-top: 20px;

  @media (min-width: 700px) {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin-left: 60px;
    margin-top: 0px;
  }
`
export const TagList = styled.ul`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  margin-top: 0;
`
export const Tag = styled.li`
  /* background-color: #3761A8; */
  border: 2px solid #feca1b;
  color: white;
  padding: 0.5em 1em;
  width: 100px;
  text-align: center;
  border-radius: 1em;
`
