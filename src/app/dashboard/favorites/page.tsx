import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";
import { IoHeartOutline } from "react-icons/io5";


export const metadata = {
 title: 'Favoritos',
 description: 'Page Favorites',
};

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      
      <span className="text-5xl my-2"> Pokemons Favoritos <small> Global State </small></span>
      {/* <h1>Hello PokemonsPage</h1> */}
      {/* {
        JSON.stringify( pokemons )
      } */}
      {/* <PokemonGrid pokemons={ [] }/> */}
      <FavoritePokemons />
      {/* <NotFavorites /> */}

    </div>
  );
}

