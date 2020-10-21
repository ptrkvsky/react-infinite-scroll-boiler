import React from 'react';

import logo from './pokeball.svg';
import './App.css';
import PokemonsList from './components/PokemonsList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <p style={{ marginTop: '3vw', lineHeight: 1.5, color: '#022f86' }}>
          All pokemons in one list. <br /> Scroll to cactch them all
        </p>
      </header>
      <main style={style.main}>
        <PokemonsList />
      </main>
    </div>
  );
}

const style = {
  main: {
    backgroundColor: '#00256e',
    color: '#FFF',
  },
};

export default App;
