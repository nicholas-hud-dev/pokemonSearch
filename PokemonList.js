import React from 'react'
import "./App.css"

export default function PokemonList({ pokemon }) {
    return (
        <div className="PokemonList">
          <div className="PokemonDetails">
          <h2>Pokemon Details:</h2>
          <div>
            <strong>Name:</strong> {pokemon.name}
          </div>
          <div>
            <strong>ID:</strong> {pokemon.id}
          </div>
          <div>
            <strong>HP:</strong> {pokemon.hp}
          </div>
          <div>
            <strong>Attack:</strong> {pokemon.attack}
          </div>
          <div>
            <strong>Defense:</strong> {pokemon.defense}
          </div>
          <div>
            <strong>Type:</strong> {pokemon.type}
          </div>
        </div>
          {pokemon.img && (
            <div className='PokemonImage'>
              <strong></strong>
              <img src={pokemon.img} alt={pokemon.name} className="pokePic" />
            </div>
          )}
        </div>
      );
}
