import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
      name: 'toolkit',
      initialState: {
         country: "Все страны"
      },
      reducers: {
         selectCountry(state, action) {
            state.country = action.payload;
         }
      }
   }
)

export default toolkitSlice.reducer

export const {selectCountry} = toolkitSlice.actions