import React from "react";
import { CategoryType } from "../models/CategoryType";
import "./Categories.css"

type CategoriesProps = {
  CategoryList: CategoryType[];
};

export const Categories = ({ CategoryList }: CategoriesProps) => {
  return (
    <div className={"navbar__category--container"}>
      <h3>Categories</h3>
      <ul className={"navbar__category navbar__list"}>
        {CategoryList.map(category => (
          <li className={"navbar__category--link"} key={category.id}><button onClick={()=>console.log(category.name)}>{category.name}</button></li>
        ))}
      </ul>
    </div>
  );
};
