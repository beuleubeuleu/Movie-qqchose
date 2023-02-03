import React from "react";
import logo  from "../logo.svg";
import "./Navbar.css"
export const Navbar = () => {
  return (

      <nav>
        <img src={ logo } className="navbar__logo" alt="logo"/>
        <h1 className="app-title">Movie qqchose</h1>

        <ul className="navbar__discover navbar__list">

          <h3 className="navbar__discover--title">Discover</h3>

          <li className="navbar__discover--link">
            <button type="submit" onClick={ () => console.log("discover") }>Popular</button>
          </li>
          <li className="navbar__discover--link">
            <button type="submit" onClick={ () => console.log("discover") }>Top Rated</button>
          </li>
          <li className="navbar__discover--link">
            <button type="submit" onClick={ () => console.log("discover") }>Upcoming</button>
          </li>
        </ul>

        <ul className="navbar__category navbar__list">

          <h3 className="navbar__category--title">Category</h3>

          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Action</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Adventure</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Animation</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Comedy</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Crime</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Documentary</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Drama</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Family</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Fantasy</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>History</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Horror</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Music</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Mystery</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Romance</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Sciences Fiction</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>TV Movie</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Thriller</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>War</button>
          </li>
          <li className="navbar__category--link">
            <button onClick={ () => {console.log("category")} }>Western</button>
          </li>
        </ul>
  
      </nav>
  )
}