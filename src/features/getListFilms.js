import axios from "axios";

function getListFilms() {
   axios({
      url: 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?country=1&genre=2&genre=0&order=RATING&type=FILM&ratingFrom=5&ratingTo=10&yearFrom=1998&yearTo=2019&page=5',
      headers: {
         'X-API-KEY': 'b7f13992-d5e9-4deb-a225-1692bcdd1f07'
      }
   })
      .then(function (response) {
         // handle success
         console.log(response.data);
      })

}

export default getListFilms