import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'
import {initialState} from '../../toolkitRedux/initialState'
import shuffleListFilms from '../../features/shuffleListFilms'
import type {fetchParamsTypes} from '../../types'
import {InitialStateTypes} from '../../types'

export const fetchFilms = createAsyncThunk(
    'kinopoisk/fetchFilms',
    async function (_, {dispatch, getState, rejectWithValue}) {
        const {isNewFilters} = kinopoiskSlice.actions
        const {
            selectedCountry,
            selectedGenre,
            selectedRating,
            selectedYears,
            totalPagesResponse
        } = getState() as InitialStateTypes

        const fetchParams: fetchParamsTypes = {
            ratingFrom: selectedRating[0],
            ratingTo: selectedRating[1],
            yearFrom: selectedYears[0],
            yearTo: selectedYears[1],
            order: 'NUM_VOTE',
            page: totalPagesResponse
        }
        if (selectedCountry.id !== 0) fetchParams.countryId = selectedCountry.id
        if (selectedGenre.id !== 0) fetchParams.genreId = selectedGenre.id
        try {
            const response = await axios({
                url: `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters`,
                params: fetchParams,
                headers: {
                    'X-API-KEY': 'b7f13992-d5e9-4deb-a225-1692bcdd1f07'
                    // 9cf1fa82-1cb3-4ab0-b073-f34c936caf95
                }
            })

            let responseOK = response && response.status === 200

            if (!responseOK) {
                debugger
                throw new Error('Server Error!')
            }
            dispatch(isNewFilters(false))
            return response.data
        } catch
            (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addFilmsToList = createAsyncThunk(
    'kinopoisk/fetchFilms',
    async function (_, {dispatch, getState}) {
        const {addFilms, isNewFilters} = kinopoiskSlice.actions
        const {
            selectedCountry,
            selectedGenre,
            selectedRating,
            selectedYears,
            currentPageResponse
        } = getState() as InitialStateTypes

        const fetchParams: fetchParamsTypes = {
            ratingFrom: selectedRating[0],
            ratingTo: selectedRating[1],
            yearFrom: selectedYears[0],
            yearTo: selectedYears[1],
            order: 'NUM_VOTE',
            page: currentPageResponse
        }
        if (selectedCountry.id !== 0) fetchParams.countryId = selectedCountry.id
        if (selectedGenre.id !== 0) fetchParams.genreId = selectedGenre.id
        const response = await axios({
            url: `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters`,
            params: fetchParams,
            headers: {
                'X-API-KEY': 'b7f13992-d5e9-4deb-a225-1692bcdd1f07'
                // 9cf1fa82-1cb3-4ab0-b073-f34c936caf95
            }
        })
        dispatch(isNewFilters(false))
        dispatch(addFilms(response.data.films))

        return response.data
    }
)

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