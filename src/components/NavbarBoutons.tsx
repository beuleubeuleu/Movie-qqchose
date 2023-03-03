import React from "react";
import "./NavbarBouton.css";

type NavbarBoutonProps = {
  value: string;
  boutonText: string;
  onclick: (arg: string) => void;
};
export const NavbarBouton = ({
  value,
  onclick,
  boutonText,
}: NavbarBoutonProps) => {
  return (
    <button className={"navbar-bouton"} onClick={() => onclick(value)}>
      {" "}
      {boutonText}{" "}
    </button>
  );
};
