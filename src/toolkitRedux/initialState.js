import top250ListFilms from "../features/top250ListFilms";

const initialState = {
   selectedCountry: {id: 0, country: "Все страны"},
   selectedGenre: {id: 0, genre: "Все жанры"},
   selectedYears: [1920, (new Date()).getFullYear()],
   selectedRating: [0, 10],
   currentFilmNumber: 0,
   shuffledListFilms: top250ListFilms
}

export default initialState