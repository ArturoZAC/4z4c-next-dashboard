import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
 title: '151 Pokemons',
 description: '151 Pokemons',
};

const getPokemons = async( limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const pokemons: PokemonsResponse = await data.json();

  return pokemons.results.map( poke => ({
    id: poke.url.split('/').at(-2)!,
    name: poke.name
  }));
}


export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      
      <span className="text-5xl my-2">Listado de Pokemons <small> Estatico </small></span>
      {/* <h1>Hello PokemonsPage</h1> */}
      {/* {
        JSON.stringify( pokemons )
      } */}
      <PokemonGrid pokemons={ pokemons }/>

    </div>
  );
}