"use client";

import { useAppSelector } from "@/store";
import { PokemonCard } from "./PokemonCard";
import { NoFavorites } from "./NoFavorites";

export const FavoritePokemonsGrid = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        favoritePokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      )}
    </div>
  );
};
