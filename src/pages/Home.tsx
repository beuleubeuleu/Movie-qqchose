import React from "react";
import { Navbar } from "../components/Navbar";
import { MovieList } from "../components/MovieList";
import { CategoryType } from "../types/CategoryType";
import { MovieType } from "../types/MovieType";

type HomeProps = {
  discoverList: string[];
  categoryList: CategoryType[];
  onclickDiscover: (arg: string) => void;
  onclickCategory: (arg: string) => void;
  data: MovieType[];
};

export const Home = ({
  discoverList,
  categoryList,
  onclickDiscover,
  onclickCategory,
  data,
}: HomeProps) => {
  return (
    <div className="Home">
      <header className="App-header">
        <Navbar
          discoverList={discoverList}
          categoryList={categoryList}
          onclickDiscover={onclickDiscover}
          onclickCategory={onclickCategory}
        />
      </header>

      <MovieList data={data} />
    </div>
  );
};
