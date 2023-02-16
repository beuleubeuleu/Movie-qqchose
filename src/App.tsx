import React                       from "react";
import "./App.css";
import { MovieCard }               from "./components/MovieCard";
import { Navbar }                  from "./components/Navbar";
import { movieData, CategoryList } from "./datas";

const fetchMovies = (type: string) => {
  console.log(`fetching ${ type } movies`);
}


function App() {

  return (
      <div className="App">
        <header className="App-header">
          <Navbar categoryList={ CategoryList } onclick={ fetchMovies }/>
        </header>

        <MovieCard movieData={ movieData[0] }/>

      <MovieList data= {movieData} />
      
    </div>
  );
}

export default App;
