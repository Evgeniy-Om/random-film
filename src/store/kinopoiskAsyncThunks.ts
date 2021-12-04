import {createAsyncThunk} from '@reduxjs/toolkit'
import {fetchParamsTypes, InitialStateTypes} from '../types'
import axios from 'axios'
import {kinopoiskSlice} from './kinopoiskSlice'

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