import React from "react";
import "./NavbarBouton.css"

type NavbarBoutonProps = {
  value: string
  onclick: (arg:string) => void
}
export const NavbarBouton = ({ value, onclick }: NavbarBoutonProps) => {
  return (
      <button className={ "navbar-bouton" } onClick={ () => onclick(value) }> {value} </button>
  )
}