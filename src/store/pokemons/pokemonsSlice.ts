import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonState {
  favorites: { [key: string]: SimplePokemon }
}

// const getInitState = (): PokemonState => {
//   const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}');

//   return favorites;
// }

const initialState: PokemonState = {
  favorites: {},
  // ...getInitState(),
  // '1': { id: '1', name: 'bulbasaur' },
  // '3': { id: '3', name: 'venusaur' },
  // '5': { id: '5', name: 'charmelon' },
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons ( state, { payload }: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = payload;
    },
    toggleFavorite ( state, { payload }: PayloadAction<SimplePokemon>) {
      const { id } = payload;

      if ( !!state.favorites[id] ) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = payload;
      }

      // state[id] = payload;
      localStorage.setItem('favorite-pokemons', JSON.stringify( state.favorites ));
    }

  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;