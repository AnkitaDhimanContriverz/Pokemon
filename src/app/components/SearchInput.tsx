"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { setSearch } from "../store/searchSlice";
import PokemonTable from "./PokemonTable";
import { Pokemon } from "../types";
import { pokemonApi } from "../store/pokemonApi";
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function SearchInput() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const startUpPokemon = useAppSelector((state) => state.search.startUpPokemon);
  const data = useAppSelector(
    (state) =>
      state.pokemonApi.queries[`search("${search}")`]?.data as Pokemon[]
  );

  useEffect(() => {
    dispatch(pokemonApi.endpoints.search.initiate(search));
  }, [dispatch, search]);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        style={{ borderWidth: 1, margin: 10, borderColor: "black" }}
      />
      <PokemonTable pokemons={search.length ? data ?? [] : startUpPokemon} />
    </div>
  );
}

export default SearchInput;
