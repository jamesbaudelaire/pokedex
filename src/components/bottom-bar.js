import React, { useState, useEffect } from "react";
import { Color } from "../functions/functions";

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

export const BottomBar = ({ pokemon, type, setType }) => {
  const [speech, setSpeech] = useState(false);
  useEffect(() => {
    if (type) {
      document
        .getElementById(type)
        .scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }, [type]);

  useEffect(() => {
    setSpeech(false);
  }, [pokemon]);

  return (
    <div id="bottom-bar">
      <div
        className={`info-button ${speech ? "animate" : ""}`}
        onClick={() => {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(pokemon.info);
          utterance.pitch = 0.4;
          utterance.rate = 1;
          utterance.onstart = () => {
            setSpeech(true);
          };
          utterance.onend = () => {
            setSpeech(false);
          };
          window.speechSynthesis.speak(utterance);
        }}
      />

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
    </div>
  );
};
