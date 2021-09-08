import top250ListFilms from "./top250ListFilms";

const initialState = {
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