import React                       from "react";
import "./App.css";
import { Navbar }                  from "./components/Navbar";
import { movieData, CategoryList } from "./datas";
import {MovieList}                 from "./components/MovieList";

const fetchMovies = (type: string) => {
  console.log(`fetching ${ type } movies`);
}


function App() {

  return (
      <div className="App">
        <header className="App-header">
          <Navbar categoryList={ CategoryList } onclick={ fetchMovies }/>
        </header>

      <MovieList data= {movieData} />
      
    </div>
  );
}

export default App;
