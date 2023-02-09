import React from 'react';
import './App.css';
import {MovieCard} from './components/MovieCard';
import { Navbar } from "./components/Navbar";
import {movieData} from './datas';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>

      <MovieCard movieData= {movieData[0]} />
      
    </div>
  );
}

export default App;
