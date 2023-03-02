import React from "react";
import { NavbarBouton } from "./NavbarBoutons";
import "./Categories.css"

type DiscoverProps = {
  discoverList: string[]
  onclick: (arg:string) => void;
};

export const Discover = ({ discoverList, onclick }: DiscoverProps) => {
  return (
      <div className={"navbar__category--container"}>
        <h3>Categories</h3>
        <ul className={"navbar__category navbar__list"}>
          {discoverList.map(category => (
              <li className={"navbar__category--link"} key={discoverList.indexOf(category)}><NavbarBouton value={category} onclick={onclick}/></li>
          ))}
        </ul>
      </div>
  );
};
