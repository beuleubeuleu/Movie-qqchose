import React from "react";
import { NavbarBouton } from "./NavbarBoutons";
import "./Categories.css";

type DiscoverProps = {
  discoverList: string[];
  onclickDiscover: (arg: string) => void;
};

export const Discover = ({ discoverList, onclickDiscover }: DiscoverProps) => {
  return (
    <div className={"navbar__category--container"}>
      <h3>Discover</h3>
      <ul className={"navbar__category navbar__list"}>
        {discoverList.map((category) => (
          <li
            className={"navbar__category--link"}
            key={discoverList.indexOf(category)}
          >
            <NavbarBouton
              boutonText={category}
              value={category}
              onclick={onclickDiscover}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
