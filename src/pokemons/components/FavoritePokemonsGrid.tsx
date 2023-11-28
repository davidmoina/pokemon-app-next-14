"use client";

import { useAppSelector } from "@/store";
import { PokemonCard } from "./PokemonCard";
import { useState } from "react";
import { NoFavorites } from "./NoFavorites";

export const FavoritePokemonsGrid = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );

  const [pokemons, setPokemons] = useState(favoritePokemons);

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      )}
    </div>
  );
};
