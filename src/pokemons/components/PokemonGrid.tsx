import { SimplePokemon } from "../interfaces/simplepokemon.response"
import { PokemonCard } from "./PokemonCard"

export const PokemonGrid = ( {pokemons}: { pokemons: SimplePokemon[]}) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {
        pokemons?.map(poke => (
          <PokemonCard key={poke.id} pokemon={poke}/>
        ))
      }
    </div>
  )
}
