import React from 'react'
import { PaginationButton, PaginationContainer } from './styles'

const Pagination = ({
  pages = 2,
  selected = 1,
  changePage = n => {}
}) => {
  const buttons = []
  const jumpStart = selected
  const jumpEnd = selected + 4
  for (let i = 1; i <= pages; i++) {
    if (i <= jumpEnd && i >= jumpStart) {
      buttons.push(
        <li key={i}>
          <PaginationButton
            className={i === selected ? 'selected' : ''}
            onClick={() => changePage(i)}
          >
            {i}
          </PaginationButton>
        </li>
      )
    }
    if (i === pages && jumpEnd < 45) {
      buttons.push(
        <li key={i}>
          ...
          <PaginationButton
            className={i === selected ? 'selected' : ''}
            onClick={() => changePage(i)}
          >
            {i}
          </PaginationButton>
        </li>
      )
    }
  }
  return (
    <>
      <PaginationContainer>
        {pages > 1 && (
          <>
            <li>
              <PaginationButton
                onClick={() => {
                  selected > 1 && changePage(selected - 1)
                }}
              >
                Previous
              </PaginationButton>
            </li>
            {buttons}
            <li>
              <PaginationButton
                onClick={() => {
                  selected < pages && changePage(selected + 1)
                }}
              >
                Next
              </PaginationButton>
            </li>
          </>
        )}
      </PaginationContainer>
    </>
  )
}

export default Pagination
