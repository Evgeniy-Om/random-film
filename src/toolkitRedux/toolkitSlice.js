import {createSlice} from "@reduxjs/toolkit"
import initialState from "./initialState"

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
            state.years.selectedYears = action.payload
         },
         selectRating(state, action) {
            state.rating.selectedRating = action.payload
         }
      }
   }
)



export default toolkitSlice.reducer

export const {selectCountry, selectGenre, selectYears, selectRating} = toolkitSlice.actions