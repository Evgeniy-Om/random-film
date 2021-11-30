import top250ListFilms from "./top250ListFilms";

const initialState: InitialStateTypes = {
   selectedCountry: {id: 0, country: "Все страны"},
   selectedGenre: {id: 0, genre: "Все жанры"},
   selectedYears: [1920, (new Date()).getFullYear()],
   selectedRating: [0, 10],
   currentFilmNumber: 1,
   listFilms: top250ListFilms,
   isChangedFilters: false,
   currentPageResponse: 1,
   totalPagesResponse: 1,
   totalFilteredFilms: 0,
   isDisabledRandomFilmButton: false,
   status: null,
   error: null,
}

export default initialState

export type InitialStateTypes = {
   selectedCountry: {id: number, country: string}
   selectedGenre: {id: number, genre: string}
   selectedYears: [number, number]
   selectedRating: [number, number]
   currentFilmNumber: number
   listFilms: typeof top250ListFilms
   isChangedFilters: boolean
   currentPageResponse: number
   totalPagesResponse: number
   totalFilteredFilms: number
   isDisabledRandomFilmButton: boolean
   status: null | string
   error: null | string
}