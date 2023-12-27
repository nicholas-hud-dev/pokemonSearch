import React from 'react'
import "./App.css"

export default function Pagination({goToNextPage, goToPrevPage, pokemonId}) {
  return (
    <div className="Pagination">
      {goToPrevPage && pokemonId > 1 && (
        <button onClick={goToPrevPage}>Previous</button>
      )}
      {goToNextPage && pokemonId < 1010 && (
        <button onClick={goToNextPage}>Next</button>
      )}
    </div>
  )
}
