import React from "react";
import "./App.css";
import { Btn } from "../common/Btn";

export const Header = () => {
  return (
    <>
      <header>
        <h1>
          <strong>Ogłoszenia</strong>
        </h1>
        <Btn text="Dodaj ogłoszenie"></Btn>
        <div className="search">
          <input type="search" />
          <Btn text="Szukaj" />
        </div>
      </header>
    </>
  );
};
