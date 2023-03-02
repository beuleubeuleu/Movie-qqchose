import React                       from "react";
import { Navbar }                  from "./Navbar";
import { MovieList }               from "./MovieList";
import { CategoryType }            from "../models/CategoryType";
import { MovieType }               from "../models/MovieType";

type HomeProps = {
  discoverList: string[]
  categoryList: CategoryType[],
  onclick: (arg: string) => void,
  data: MovieType[]
}

export const Home = ({discoverList,categoryList, onclick, data }: HomeProps) => {
  return (
      <div className="Home">
        <header className="App-header">
          <Navbar discoverList={discoverList} categoryList={ categoryList } onclick={ onclick }/>
        </header>

        <MovieList data={ data }/>

      </div>
  )
}