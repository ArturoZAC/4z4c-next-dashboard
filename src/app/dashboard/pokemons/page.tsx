
const getPokemons = async( limit = 20, offset = 0): Promise<any> => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const pokemons = await data.json();
  // console.log(pokemons);

  return pokemons;
}


export default async function PokemonsPage() {

  const pokemons = await getPokemons();

  return (
    <div>
      {/* <h1>Hello PokemonsPage</h1> */}
      {
        JSON.stringify( pokemons )
      }
    </div>
  );
}