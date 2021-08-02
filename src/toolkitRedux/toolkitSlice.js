import {createSlice} from "@reduxjs/toolkit"
import initialState from "./initialState"
import shuffleListFilms from "../features/shuffleListFilms";

const toolkitSlice = createSlice({
      name: 'toolkit',
      initialState: initialState,
      reducers: {
         selectCountry(state, action) {
            state.selectedCountry = action.payload
         },
         selectGenre(state, action) {
            state.selectedGenre = action.payload
         },
         selectYears(state, action) {
            state.selectedYears = action.payload
         },
         selectRating(state, action) {
            state.selectedRating = action.payload
         },
         numFilm(state) {
            state.currentFilmNumber += 1
         },
         shuffle(state) {
            state.shuffledListFilms = shuffleListFilms(state.shuffledListFilms)
         }
      }
   }
)



export default toolkitSlice.reducer

export const {
   selectCountry,
   selectGenre,
   selectYears,
   selectRating,
   shuffle,
   numFilm} = toolkitSlice.actions