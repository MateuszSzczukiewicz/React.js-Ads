import React, { SyntheticEvent, useContext, useState } from "react";
import "./Header.css";
import { Btn } from "../common/Btn";
import { SearchContext } from "../../contexts/search.context";

export const Header = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [inputVal, setInputVal] = useState(search);

  const setSearchFromLocalState = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearch(inputVal);
  };

  return (
    <header>
      <h1>
        <strong>Ogłoszenia</strong>
      </h1>
      <Btn text="Dodaj ogłoszenie"></Btn>
      <div className="search" onSubmit={setSearchFromLocalState}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <Btn text="Szukaj" />
      </div>
    </header>
  );
};
