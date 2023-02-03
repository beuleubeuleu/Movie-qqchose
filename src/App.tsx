import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Movie} from './components/Movie';
import { MovieType } from './models/Movie';

function App() {
  // const film: MovieType = {
  //   id: 1, poster_id: 3, title: "Avengers", description: "un gros navet", poster_path:"http://image.png"
  // } => pour régler ton problème de '<Movie movie={movie}/>', tu dois d'abord déclarer une variable qui doit contenir les données de ton movie type. Ensuite, tu donne la variable à movie ce qui te donnera => '<Movie movie={film}/>'
  // Si tu utilise l'API, tu n'auras pas besoin de créer cette variable
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
        {/* il faudra jouer avec l'API pour afficher le component movie */}
      {/* <Movie movie={movie_Key-API}/> */}
    </div>
  );
}

export default App;
