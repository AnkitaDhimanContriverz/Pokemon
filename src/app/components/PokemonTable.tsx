import { Pokemon } from "../types";
import React from "react";

function PokemonTable({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pok) => (
          <tr key={pok.id}>
            <td>{pok.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PokemonTable;
