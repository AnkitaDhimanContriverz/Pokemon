import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Pokemon } from "../types";

export interface SearchState {
  search: string;
  startUpPokemon: Pokemon[];
}

const initialState: SearchState = {
  search: "",
  startUpPokemon: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStartupPokemon: (state, action: PayloadAction<Pokemon[]>) => {
      state.startUpPokemon = action.payload;
    },
  },
});

export const { setSearch, setStartupPokemon } = searchSlice.actions;
export default searchSlice.reducer;
