import React            from "react";
import logo             from "../logo.svg";
import "./Navbar.css";
import { Categories }   from "./Categories";
import { Discover }     from "./Discover";
import { CategoryType } from "../models/CategoryType";

type NavbarProps = {
  discoverList: string[]
  categoryList: CategoryType[],
  onclickDiscover: (arg: string) => void
  onclickCategory:(arg: string) => void
}

export const Navbar = ({ discoverList, categoryList, onclickDiscover, onclickCategory }: NavbarProps) => {
  return (

      <nav>
        <img src={ logo } className="navbar__logo" alt="logo"/>
        <h1 className="app-title">Movie qqchose</h1>

        <Discover discoverList={ discoverList } onclickDiscover={ onclickDiscover }/>

        <Categories categoryList={ categoryList } onclickCategory={ onclickCategory }/>
      </nav>
  )
}
