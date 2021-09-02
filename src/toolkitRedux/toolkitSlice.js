import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import initialState from "./initialState"
import shuffleListFilms from "../features/shuffleListFilms";
import axios from "axios";

export const fetchFilms = createAsyncThunk(
   'toolkit/fetchFilms',
   async function (_, {getState}) {
      const {
         selectedCountry,
         selectedGenre,
         selectedRating,
         selectedYears,
         currentFilmNumber
      } = getState().toolkit

      const fetchParams = {
         ratingFrom: selectedRating[0],
         ratingTo: selectedRating[1],
         yearFrom: selectedYears[0],
         yearTo: selectedYears[1],
         page: currentFilmNumber
      }
      if (selectedCountry.id !== 0) fetchParams.country = selectedCountry.id
      if (selectedGenre.id !== 0) fetchParams.genre = selectedGenre.id
      const response = await axios({
         url: `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters`,
         params: fetchParams,
         headers: {
            'X-API-KEY': 'b7f13992-d5e9-4deb-a225-1692bcdd1f07'
            // 9cf1fa82-1cb3-4ab0-b073-f34c936caf95
         }
      })
      return response.data
   }
)
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
      },
      extraReducers: {
         [fetchFilms.pending]: () => {},
         [fetchFilms.fulfilled]: () => {},
         [fetchFilms.rejected]: () => {}
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
   numFilm
} = toolkitSlice.actions