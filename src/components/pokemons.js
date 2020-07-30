import React, { useState, useEffect } from "react";

import { IO } from "../functions/IO";

export const Pokemons = ({ pokedex, setPokemon, pokemon, type, habitat }) => {
  let filtered = () => {
    let f = pokedex;
    if (type) {
      f = f.filter(p => p.type === type);
    }
    if (habitat) {
      f = f.filter(p => p.habitat === habitat);
    }

    return f;
  };

  useEffect(() => {
    let targets = document.querySelectorAll(".pokemon");
    targets.forEach(IO);
  });

  return (
    <div id="pokemons">
      {filtered().length === 0 && <div className="empty">?</div>}
      {filtered().map(p => (
        <div
          className={`pokemon transition ${
            pokemon.id === p.id ? "selected" : ""
          }`}
          key={p.id}
          id={p.name}
          onClick={() => {
            setPokemon(p);
          }}
          style={{
            backgroundImage: `url('https://res.cloudinary.com/baudelaire/image/upload/v1594858651/pokemon/pokeball.png')`
          }}
          data-img={`https://res.cloudinary.com/baudelaire/image/upload/v1594858651/pokemon/${
            p.id
          }-min.png`}
        />
      ))}
    </div>
  );
};
