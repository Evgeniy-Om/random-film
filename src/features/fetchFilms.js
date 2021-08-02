import axios from "axios";

async function fetchFilms(countryId, genreId, years, rating, isInitial) {
   try {
      return await axios({
         url: `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=12`,
         headers: {
            'X-API-KEY': 'b7f13992-d5e9-4deb-a225-1692bcdd1f07'
            // 9cf1fa82-1cb3-4ab0-b073-f34c936caf95
         }
      })
   } catch (e) {
      alert(e)
   }
}

export default fetchFilms
