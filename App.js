import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";
import "./App.css"

function App() {

  const [pokemon, setPokemon] = useState({
                name: "", 
                id: "",
                species: "",
                img: "",
                hp: "",
                attack: "",
                defense: "",
                type: "",
  })
  const [loading, setLoading] = useState(true)
  const [pokemonName, setPokemonName] = useState("bulbasaur")
  const [pokemonChosen, setPokemonChosen] = useState(false)

  const searchPokemon = (pokemonIdentifier) => {
    setLoading(true)

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}`).then(
      (response) => {
        setPokemon({
                name: response.data.name, 
                id: response.data.id,
                img: response.data.sprites.front_default,
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                type: response.data.types[0].type.name,
      })
      setPokemonChosen(true)
      setLoading(false)
    }
  )
}


useEffect(() => {
  if (!pokemonChosen) {
    setLoading(true)
  
  setLoading(true);

  // Fetch the Pokémon data
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
    (response) => {
      setPokemon({
        name: response.data.name,
        id: response.data.id,
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name,
      });
      setPokemonChosen(true);
      setLoading(false); // Set loading to false after data is fetched
    }
  );
  }
}, []);


useEffect(() => {
  if (pokemonChosen) {
   searchPokemon(pokemonName) 
  }
  
}, [])

function goToNextPage() {
  if (pokemon.id) {
    const nextPokemonId = parseInt(pokemon.id) + 1;
    searchPokemon(nextPokemonId);
  }
}

function goToPrevPage() {
  if (pokemon.id) {
    const prevPokemonId = parseInt(pokemon.id) - 1;
    searchPokemon(prevPokemonId);
  }
}

function handleSearch() {
  searchPokemon(pokemonName.toLowerCase());
}


if (loading) return "Loading..."

  
  return (
    <>
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon Stats</h1>
        <input 
               type="text" 
               value={pokemonName}
               onChange={(event) => {
                setPokemonName(event.target.value)
                }}
               onKeyDown={(event) => {
                if (event.key === "Enter" || event.type === "click" ) {
                  handleSearch()
                }
               }} 
                />
        <button onClick={handleSearch}>Search Pokemon</button>
      </div>
    </div>
    <div className="DisplaySection">
      {!pokemonChosen ? (<h1>Choose</h1>
    ) : (
      <h1>{pokemon.name}</h1>
    )}</div>
      <Pagination 
      goToNextPage={pokemon.id ? goToNextPage : null}
      goToPrevPage={pokemon.id ? goToPrevPage : null}
      pokemonId={pokemon.id}
    />
      <PokemonList pokemon={pokemon} />
    </>

  )
}

export default App;