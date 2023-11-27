import { PokemonGrid } from "@/pokemons";

export const metadata = {
  title: "Favorites",
  description: "Your favorite pokemons",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-4xl my2">
        Favorite Pokémons <small className="text-blue-500">global state</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
