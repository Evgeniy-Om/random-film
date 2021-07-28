const thisYear = (new Date()).getFullYear()

const initialState = {
   selectedCountry: {id: 0, country: "Все страны"},
   selectedGenre: {id: 0, genre: "Все жанры"},
   years: {
      marks: [
         {
            value: 1920,
            label: "1920"
         },
         {
            value: thisYear,
            label: `${thisYear}`
         }
      ],
      selectedYears: [1920, thisYear]
   },
   rating: {
      marks: [
         {
            value: 0,
            label: "0"
         },
         {
            value: 10,
            label: "10"
         }
      ],
      selectedRating: [0, 10]
   },
   filmsAPI: {
      shuffleListFilms: {},
      currentFilmNumber: 0
   }

}

export default initialState