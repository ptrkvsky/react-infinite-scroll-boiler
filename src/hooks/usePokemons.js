import { useEffect, useState } from 'react';

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect((endPoint = `https://pokeapi.co/api/v2/pokemon?limit=20`) => {
    fetch(endPoint)
      .then((body) => body.json())
      .then((response) => {
        setPokemons(response);
      });
  }, []);

  return [pokemons, setPokemons];
};

export default usePokemons;
