import React from "react";
import PokemonTable from "./PokemonTable";
import { store } from "../store";

function SSRPokemonTable() {
  return (
    <div>
      <PokemonTable pokemons={store.getState().search.startUpPokemon} />
    </div>
  );
}

export default SSRPokemonTable;
