import React, { useState, useEffect, useRef } from "react";
import "./main.scss";
import "./styles/bottom-bar.scss";

import { Pokedex } from "./pokedex";

import { PokemonCard } from "./components/pokemon-card";
import { Pokemons } from "./components/pokemons";
import { BottomBar } from "./components/bottom-bar";

export const App = () => {
  const [pokemon, setPokemon] = useState(Pokedex[24]);
  const [type, setType] = useState();
  const [habitat, setHabitat] = useState();

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  });

  return (
    <div id="app">
      <div className={`main transition ${load ? "loaded" : ""}`}>
        <PokemonCard pokemon={pokemon} />
        <Pokemons
          type={type}
          habitat={habitat}
          pokedex={Pokedex}
          pokemon={pokemon}
          setPokemon={setPokemon}
        />
        <BottomBar
          pokemon={pokemon}
          type={type}
          setType={setType}
          habitat={habitat}
          setHabitat={setHabitat}
        />
      </div>

      {!load && (
        <img
          className="loading-pokeball"
          alt="loading"
          src="https://res.cloudinary.com/baudelaire/image/upload/v1594858651/pokemon/pokeball.png"
        />
      )}
    </div>
  );
};
