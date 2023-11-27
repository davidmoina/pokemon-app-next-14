import { Pokemon } from "@/pokemons";
import { notFound } from "next/navigation";

export const getPokemon = async (idOrName: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${idOrName}`,
      {
        next: { revalidate: 3600 },
      }
    ).then((res) => res.json());

    console.log("Se cargo ", pokemon.name);

    return pokemon;
  } catch (error) {
    notFound();
  }
};
