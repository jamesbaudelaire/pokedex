import React, { useState, useEffect } from "react";

import { Color } from "../functions/functions";

export const PokemonCard = ({ pokemon }) => {
  let src = `https://res.cloudinary.com/baudelaire/image/upload/v1594858651/pokemon/${
    pokemon.id
  }-min.png`;

  let trainerHeight = h => {
    if (h < 15) {
      return 90;
    }
    if (h > 15) {
      return 90 - (h - 15) * 7;
    }
  };

  let statWidth = v => {
    return Math.round((v / 250) * 200);
  };

  let invertHex = hex => {
    return (Number(`0x1${hex}`) ^ 0xffffff)
      .toString(16)
      .substr(1)
      .toUpperCase();
  };

  let background = () => {
    return invertHex(Color(pokemon.type));
  };

  return (
    <div
      id="poke-card"
      className="transition"
      style={{ background: `#${background()}` }}
    >
      <img className="selected-poke" alt="pokemon" src={src} />

      <div className="poke-name">{pokemon.name}</div>

      <div className="poke-size">
        <img
          className="poke-thumb"
          alt="pokemon"
          src={`https://res.cloudinary.com/baudelaire/image/upload/v1594858651/pokemon/${
            pokemon.id
          }-min.png`}
        />
        <img
          className="poke-trainer transition"
          style={{ height: `${trainerHeight(pokemon.height)}px` }}
          alt="trainer"
          src="https://res.cloudinary.com/baudelaire/image/upload/v1594858651/pokemon/trainer.png"
        />
      </div>

      <img
        className="poke-type"
        alt="pokemon-type"
        src={`https://res.cloudinary.com/baudelaire/image/upload/v1594948123/pokemon/types/${
          pokemon.type
        }.png`}
      />

      <div className="poke-stats">
        {[
          "hp",
          "attack",
          "defense",
          "special-attack",
          "special-defense",
          "speed"
        ].map(stat => (
          <div className="stat" key={stat}>
            <div className="stat-name">{stat}</div>
            <div className="stat-val">
              <div
                style={{ width: statWidth(pokemon[stat]) }}
                className="transition"
              />
            </div>
          </div>
        ))}
      </div>

      <div
        alt="habitat"
        className="habitat"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/baudelaire/image/upload/v1596057662/pokemon/habitat/${
            pokemon.habitat
          }.png)`
        }}
      />
    </div>
  );
};
