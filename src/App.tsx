import React from 'react';
import './App.css';
import {MovieList} from './components/MovieList';
import { Navbar } from "./components/Navbar";
import {movieData, CategoryList} from './datas';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar CategoryList={CategoryList}/>
      </header>

      <MovieList data= {movieData} />
      
    </div>
  );
}

export default App;
