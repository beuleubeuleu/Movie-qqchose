import React            from "react";
import { Navbar }       from "../components/Navbar";
import { MovieList }    from "../components/MovieList";
import { CategoryType } from "../types/CategoryType";
import { MovieType }    from "../types/MovieType";
import Searchbar        from "../components/Searchbar";

type HomeProps = {
  discoverList: string[];
  categoryList: CategoryType[];
  onclickDiscover: (arg: string) => void;
  onclickCategory: (arg: string) => void;
  onSubmitSearch: (arg: string) => void;
  data: MovieType[];
};

export const Home = ({
  discoverList,
  categoryList,
  onclickDiscover,
  onclickCategory,
  onSubmitSearch,
  data
}: HomeProps) => {
  return (
      <div className="Home">
        <header className="App-header">
          <Navbar
              discoverList={ discoverList }
              categoryList={ categoryList }
              onclickDiscover={ onclickDiscover }
              onclickCategory={ onclickCategory }
          />
        </header>

        <MovieList data={ data }/>
        <Searchbar onSubmitSearch={onSubmitSearch} />
      </div>
  );
};
