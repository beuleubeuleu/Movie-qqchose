import React from "react";
import { CategoryType } from "../types/CategoryType";
import { NavbarBouton } from "./NavbarBoutons";
import "./Categories.css";

type CategoriesProps = {
  categoryList: CategoryType[];
  onclickCategory: (arg: string) => void;
};

export const Categories = ({
  categoryList,
  onclickCategory,
}: CategoriesProps) => {
  return (
    <div className={"navbar__category--container"}>
      <h3>Categories</h3>
      <ul className={"navbar__category navbar__list"}>
        {categoryList.map((category) => (
          <li className={"navbar__category--link"} key={category.id}>
            <NavbarBouton
              boutonText={category.name}
              value={category.id.toString()}
              onclick={onclickCategory}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
