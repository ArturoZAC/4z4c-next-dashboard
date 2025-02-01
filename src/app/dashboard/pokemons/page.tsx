import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async( limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const pokemons: PokemonsResponse = await data.json();
  // console.log(pokemons);

  return pokemons.results.map( poke => ({
    id: poke.url.split('/').at(-2)!,
    name: poke.name
  }));
}


export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      {/* <h1>Hello PokemonsPage</h1> */}
      {/* {
        JSON.stringify( pokemons )
      } */}

      <div className="flex flex-wrap gap-10 items-center justify-center">
        <Image 
          src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/other/dream-world/10.svg'}
          width={100}
          height={100}
          alt="nombre"
        />
      </div>
    </div>
  );
}