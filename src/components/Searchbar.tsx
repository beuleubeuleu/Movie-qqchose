import React               from "react";
import "./Searchbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

type SearchbarProps = {
  onSubmitSearch: (search: string) => void
}

const Searchbar = ({onSubmitSearch}: SearchbarProps) => {
  return (
        <form className="searchBox" onSubmit={event=> {
          event.preventDefault()
          const form = event.currentTarget
          const searchQuery = form.search.value
          onSubmitSearch(searchQuery)
        }}>

          <input className="searchInput" type="text" name="search" placeholder="Search"/>
            <button type={"submit"} className="searchButton" >
              <FontAwesomeIcon icon={ faMagnifyingGlass } />
            </button>
        </form>
  );
};

export default Searchbar;
