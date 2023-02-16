import React from "react";
import { CategoryType } from "../models/CategoryType";
import { NavbarBouton } from "./NavbarBoutons";
import "./Categories.css"

type CategoriesProps = {
  categoryList: CategoryType[];
  onclick: (arg:string) => void;
};

export const Categories = ({ categoryList, onclick }: CategoriesProps) => {
  return (
    <div className={"navbar__category--container"}>
      <h3>Categories</h3>
      <ul className={"navbar__category navbar__list"}>
        {categoryList.map(category => (
          <li className={"navbar__category--link"} key={category.id}><NavbarBouton value={category.name} onclick={onclick}/></li>
        ))}
      </ul>
    </div>
  );
};
