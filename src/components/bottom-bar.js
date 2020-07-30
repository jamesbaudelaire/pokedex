import React from "react";

let types = [
  "bug",
  "water",
  "normal",
  "grass",
  "fire",
  "flying",
  "electric",
  "ice",
  "poison",
  "dragon",
  "ground",
  "fighting",
  "psychic",
  "rock",
  "ghost"
];

let habitats = [
  "grassland",
  "mountain",
  "waters-edge",
  "forest",
  "rough-terrain",
  "cave",
  "urban",
  "sea",
  "rare"
];

export const BottomBar = ({ pokemon, type, setType, habitat, setHabitat }) => {
  return (
    <div id="bottom-bar">
      <div className="poke-types">
        {types.map(t => (
          <div
            id={t}
            key={t}
            className={`poke-type transition ${type === t ? "selected" : ""}`}
            onClick={() => {
              if (type === t) {
                setType(null);
              } else {
                setType(t);
              }
            }}
          >
            <img
              alt="pokemon-type"
              src={`https://res.cloudinary.com/baudelaire/image/upload/v1594948123/pokemon/types/${t}.png`}
            />
            {t}
          </div>
        ))}
      </div>
      <div className="habitats">
        {habitats.map(h => (
          <div
            className={`habitat transition ${habitat === h ? "selected" : ""}`}
            key={h}
            onClick={() => {
              if (habitat === h) {
                setHabitat(null);
              } else {
                setHabitat(h);
              }
            }}
          >
            <div
              alt="habitat"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/baudelaire/image/upload/v1596057662/pokemon/habitat/${h}.png)`
              }}
            />
            {h}
          </div>
        ))}
      </div>
    </div>
  );
};
