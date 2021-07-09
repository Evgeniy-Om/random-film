import {Box, createTheme, Grid} from "@material-ui/core"
import {ThemeProvider} from "@material-ui/core/styles"
import axios from "axios"
import {useState} from "react";
import YearsSlider from "./components/YearsSlider";
import Poster from "./components/Poster";
import NameFilm from "./components/NameFilm";
import RandomFilmButton from "./components/RandomFilmButton";

const theme = createTheme({
   palette: {
      background: {
         default: "#c3ecff",
      }
   },
   spacing: 1
})

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

const countriesList = [
   {id: 0, country: "Все страны"},
   {id: 2, country: "Россия", addId: 13},
   {id: 1, country: "США"},
   {id: 25, country: "Австралия"},
   {id: 11, country: "Великобритания", addId: 38},
   {id: 3, country: "Германия", addId: 18},
   {id: 4, country: "Дания"},
   {id: 15, country: "Испания"},
   {id: 14, country: "Италия"},
   {id: 6, country: "Канада"},
   {id: 31, country: "Китай", addId: 28},
   {id: 26, country: "Корея Южная"},
   {id: 17, country: "Мексика"},
   {id: 8, country: "Франция"},
   {id: 5, country: "Швеция"},
   {id: 9, country: "Япония"},

]

function App() {
   const [allCountries, selectAllCountries] = useState([countriesList[0]])

   return (
      <ThemeProvider theme={theme}>
         <div className="App">
            <Box mt={50} textAlign="center">
               <Poster/>
               <NameFilm/>
               <RandomFilmButton/>
            </Box>

            <Box m={30}>
               <Grid container columnSpacing={25}>
                  <Grid item xs={6} md={3}>
                     <CountrySelect/>
                  </Grid>
                  <Grid item xs={6} md={3}>
                     <GenreSelect/>
                  </Grid>
                  <Grid item xs={6} md={3}>
                     <YearsSlider/>
                  </Grid>
                  <Grid item xs={6} md={3}>
                     <RatingSlider/>
                  </Grid>
               </Grid>
            </Box>
         </div>
      </ThemeProvider>
   );
}

export default App;
