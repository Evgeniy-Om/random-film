import {css} from '@emotion/css'
import {Autocomplete, Button, Chip, createTheme, Grid, Stack, TextField} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles"
import axios from "axios"
import {useState} from "react";

const theme = createTheme({
   palette: {
      background: {
         default: "#c3ecff",
      }
   }
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

function generateRandomFilm() {
   console.log(222);
}

const countriesList = [
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
   const [allCountries, selectAllCountries] = useState("Все страны")

   return (
      <ThemeProvider theme={theme}>
         <div className="App">
            <Autocomplete
               multiple
               limitTags={13}
               id="multiple-limit-tags"
               options={countriesList}
               getOptionLabel={(option) => option.country}
               defaultValue={[]}
               autoHighlight={true}
               onChange={()=> selectAllCountries("Выберите страну")}
               renderInput={(params) => (
                  <TextField {...params} label={allCountries} placeholder="" />
               )}
            />
            <header
               className={css`
                 display: flex;
                 justify-content: center;
                 align-items: center;
                 height: 100vh;
               `}>
               <Button
                  onClick={getListFilms}
                  variant="contained"
                  className={css`
                    &.MuiButton-root {
                      margin-right: 20px;
                      padding: 10px;
                    }
                  `}>
                  Получить список фильмов
               </Button>
               <Button
                  variant="contained"
                  color="error"
                  className={css`
                    &.MuiButton-root {
                      margin-right: 20px;
                      padding: 10px;
                    }
                  `}>
                  Не предлагать этот фильм
               </Button>
               <Button
                  variant="contained"
                  className={css`
                    &.MuiButton-root {
                      margin-right: 20px;
                      padding: 10px;
                    }
                  `}>
                  Похожие фильмы
               </Button>
               <Button
                  onClick={generateRandomFilm}
                  variant="contained"
                  color="secondary"
                  className={css`
                    &.MuiButton-root {
                      padding: 10px;
                    }
                  `}>
                  Случайный фильм
               </Button>
            </header>
         </div>
      </ThemeProvider>
   );
}

export default App;
