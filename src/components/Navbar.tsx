import React            from "react";
import logo             from "../logo.svg";
import "./Navbar.css";
import { Categories }   from "./Categories";
import { CategoryType } from "../models/CategoryType";

type NavbarProps = {
  categoryList: CategoryType[]
  onclick: (arg:string) => void
}

export const Navbar = ({ categoryList, onclick }: NavbarProps) => {
  return (

      <nav>
        <img src={ logo } className="navbar__logo" alt="logo"/>
        <h1 className="app-title">Movie qqchose</h1>

        <Categories categoryList={ categoryList } onclick={ onclick }/>
      </nav>
  )
}
