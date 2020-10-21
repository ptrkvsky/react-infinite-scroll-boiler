import React from 'react';

const PokemonItem = ({ pokemon, index }) => {
  return (
    <div style={style.item}>
      <span style={{ fontWeight: 'bold' }}> {index} </span> - {pokemon.name}
    </div>
  );
};

const style = {
  item: {
    display: 'flex',
    height: '10vh',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    fontSize: '24px',
  },
};

export default PokemonItem;
