import React                       from "react";
import { Navbar }                  from "./Navbar";
import { MovieList }               from "./MovieList";
import { CategoryType }            from "../models/CategoryType";
import { MovieType }               from "../models/MovieType";

type HomeProps = {
  categoryList: CategoryType[],
  onclick: (arg: string) => void,
  data: MovieType[]
}

export const Home = ({categoryList, onclick, data }: HomeProps) => {
  return (
      <div className="Home">
        <header className="App-header">
          <Navbar categoryList={ categoryList } onclick={ onclick }/>
        </header>

        <MovieList data={ data }/>

      </div>
  )
}