import React, { useState, useEffect } from "react";

import { IO } from "../functions/IO";

export const Pokemons = ({ pokedex, setPokemon, pokemon, type }) => {
  // const [filtered,setFiltered]=useState([])

  // useEffect(()=>{
  // setFiltered(pokedex)
  // },[])

  // useEffect(()=>{
  // if(type){
  //   let filter=pokedex.filter(p=>p.type===type)
  //   setFiltered(filter)
  // }
  // },[type])

  let filtered = () => {
    if (type) {
      return pokedex.filter(p => p.type === type);
    } else {
      return pokedex;
    }
  };

  useEffect(() => {
    let targets = document.querySelectorAll(".pokemon");
    targets.forEach(IO);
  });

  // useEffect(() => {
  //   if (pokemon) {
  //     document
  //       .getElementById(pokemon.name)
  //       .scrollIntoView({ behavior: "smooth", block: "center" });
  //   }
  // }, [pokemon]);

  return (
    <div id="pokemons">
      {filtered().map(p => (
        <div
          className={`pokemon transition ${
            pokemon.id === p.id ? "selected" : ""
          }`}
          key={p.id}
          id={p.name}
          onClick={() => {
            window.speechSynthesis.cancel();
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
