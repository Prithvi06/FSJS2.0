import React, { useState } from 'react';
import PokemonCard from './components/Card';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState({"flavors": []});

  const handlePokemonChange = (e) => {
    setPokemon(e.target.value);
  };

  const searchPokemon = (e) => {
    e.preventDefault();
    var url = "https://pokeapi.co/api/v2/berry/" + pokemon
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="input-div">
        <form>
          <input
            type="text"
            className="pokemon-input"
            placeholder="Search the Pokémon by its id or name."
            onChange={handlePokemonChange}
          />

          <button onClick={searchPokemon} className="search-btn">
            Search
          </button>
        </form>
      </div>

      <PokemonCard pokemonData={pokemonData} />
    </>
  );
}

export default App;
