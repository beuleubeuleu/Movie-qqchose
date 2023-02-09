import React from "react";
import { CategoryType } from "../models/CategoryType";

type CategoriesProps = {
  CategoryList: CategoryType[];
};

export const Categories = ({ CategoryList }: CategoriesProps) => {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {CategoryList.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};
