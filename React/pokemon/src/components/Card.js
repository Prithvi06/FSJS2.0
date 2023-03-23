const PokemonCard = ({ pokemonData }) => {
  return (
    <>
    <h1 className="pokemon-name">{pokemonData.name? "Name: " : ''} {pokemonData.name ? pokemonData.name : ''}</h1>
    <div className="pokemon-card">
      {pokemonData.flavors.length > 0 ? (
        pokemonData.flavors.map((pokemon) =>
                <div className="card" key={pokemon.flavor.name}>
                  <div className="meal-info">
                    <h3>Pokemon flavor Name:</h3>
                    <p><b>{pokemon.flavor.name}</b></p>
                  </div>
                  <div className="meal-info">
                    <h3>Pokemon potency:</h3>
                    <p><b>{pokemon.potency}</b></p>
                  </div>
                </div>
              )
      ) : (
        <h2>No data</h2>
      )}
    </div>
    </>
  );
};

export default PokemonCard;
