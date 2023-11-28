import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

interface FavoritePokemonsState {
  [key: string]: SimplePokemon;
}

const getInitialState = (): FavoritePokemonsState => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");

  return favorites;
};

const initialState: FavoritePokemonsState = {
  ...getInitialState(),
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        delete state[id];
        return;
      } else {
        state[id] = pokemon;
      }

      localStorage.setItem("favorites", JSON.stringify(state));
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
