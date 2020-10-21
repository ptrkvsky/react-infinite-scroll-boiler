import React from 'react';
import usePokemons from '../hooks/usePokemons';
import PokemonItem from './PokemonItem';

const PokemonList = ({ refApp }) => {
  const [pokemons, setPokemons] = usePokemons();

  const handleClick = () => {
    fetch(pokemons.next)
      .then((body) => body.json())
      .then((response) => {
        const pokemonsConcated = pokemons.results.concat(response.results);
        console.info(pokemonsConcated);
        response.results = pokemonsConcated;
        setPokemons(response);
      });
  };

  if (pokemons.results?.length > 0) {
    return (
      <div>
        <h1 style={{ fontSize: '33vw' }}>THE BIG LIST</h1>
        <div className='pokemon-wrapper'>
          {pokemons.results.map((pokemon, index) => (
            <PokemonItem key={pokemon.name} index={index} pokemon={pokemon} />
          ))}
        </div>
        <div className='pokemon-wrapper' style={{ display: 'none' }}>
          {pokemons.results.map((pokemon, index) => (
            <PokemonItem key={pokemon.name} index={index} pokemon={pokemon} />
          ))}
        </div>
        {pokemons.next ? (
          <button type='button' style={style.button} onClick={handleClick}>
            Give me more
          </button>
        ) : (
          <p style={style.congratuations}>Congratulations</p>
        )}
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

const style = {
  button: {
    backgroundColor: '#FFF',
    color: '#00256e',
    fontSize: 'max(16px, 3vw)',
    borderRadius: '10px',
    border: 'none',
    padding: '24px',
    margin: '2.5vw 0 2vw',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  congratuations: {
    backgroundColor: '#FFF',
    fontSize: 'max(16px, 5vw)',
    marginTop: '2vw',
    color: '#00256e',
    padding: '4.5vw 0 4vw',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
};
export default PokemonList;
