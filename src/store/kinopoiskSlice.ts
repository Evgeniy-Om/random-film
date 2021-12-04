import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import shuffleListFilms from '../features/shuffleListFilms'
import initialState from './initialState'
import {fetchFilms} from './kinopoiskAsyncThunks'

export const kinopoiskSlice = createSlice({
        name: 'kinopoisk',
        initialState,
        reducers: {
            selectCountry(state, action: PayloadAction<{ id: number, country: string }>) {
                state.selectedCountry = action.payload
            },
            selectGenre(state, action: PayloadAction<{ id: number, genre: string }>) {
                state.selectedGenre = action.payload
            },
            selectYears(state, action: PayloadAction<[number, number]>) {
                state.selectedYears = action.payload
            },
            selectRating(state, action: PayloadAction<[number, number]>) {
                state.selectedRating = action.payload
            },
            numFilm(state) {
                state.currentFilmNumber += 1
            },
            shuffle(state) {
                state.listFilms = shuffleListFilms(state.listFilms)
            },
            isNewFilters(state, action: PayloadAction<boolean>) {
                state.isChangedFilters = action.payload
                console.log(state.isChangedFilters)
            },
            numPagesResponse(state, action) {

            },
            changeNumPageResponse(state) {
                (state.isChangedFilters)
                    ? state.currentPageResponse = 1
                    : state.currentPageResponse += 1
            },
            addFilms(state, action) {
                state.listFilms = state.listFilms.concat(action.payload)
            },
            disableButton(state, action) {
                state.isDisabledRandomFilmButton = action.payload
                console.log(`Disabled: ${state.isDisabledRandomFilmButton}`)
            }
        },
        extraReducers: {
            [fetchFilms.pending.type]: (state) => {
                state.status = 'loading'
                state.error = null
            },
            [fetchFilms.fulfilled.type]: (state, action) => {
                state.status = 'resolved'
                state.listFilms = action.payload.films
                state.totalPagesResponse = action.payload.pagesCount
                console.log(action)
                console.log(state.totalPagesResponse)

            },
            [fetchFilms.rejected.type]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            }
        }
    }
)


export default kinopoiskSlice.reducer