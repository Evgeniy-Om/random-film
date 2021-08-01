const thisYear = (new Date()).getFullYear()

const initialState = {
   selectedCountry: {id: 0, country: "Все страны"},
   selectedGenre: {id: 0, genre: "Все жанры"},
   selectedYears: [1920, thisYear],
   selectedRating: [0, 10],
   filmsAPI: {
      shuffleListFilms: {},
      currentFilmNumber: 0
   }

}

export default initialState