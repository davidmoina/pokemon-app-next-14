import { PokemonGrid } from "@/pokemons";
import { getPokemons } from "@/utils";

export const metadata = {
  title: "Pokemons list",
  description: "List of the first 151 pokemons",
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-4xl my2">
        Pokémons list <small>static</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
