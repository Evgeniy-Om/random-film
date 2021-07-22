import {Box, createTheme, Grid} from "@material-ui/core"
import {ThemeProvider} from "@material-ui/core/styles"
import {Poster, NameFilm, RandomFilmButton, CountrySelect, GenreSelect, YearsSlider, RatingSlider} from "./components"
import {useEffect, useState} from "react";
import shuffleListFilms from "./features/shuffleListFilms";
import axios from "axios";


const theme = createTheme({
   palette: {
      background: {
         default: "#c3ecff",
      }
   },
   spacing: 1
})

function App() {
   const [films, setFilms] = useState([1,2,3])
   const [numFilm, setNumFilm] = useState(0)

   useEffect(() => {
      fetchFilms()
   }, [])

   useEffect(()=>{
      console.log(films);
   },[films]);

   useEffect(()=>{
      console.log(numFilm);
   },[numFilm]);

   async function fetchFilms() {
      try {
         const response =  await axios({
            url: `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?order=RATING&type=FILM&ratingFrom=1&ratingTo=10&yearFrom=1920&yearTo=2021&page=1`,
            headers: {
               'X-API-KEY': 'b7f13992-d5e9-4deb-a225-1692bcdd1f07'
               // 9cf1fa82-1cb3-4ab0-b073-f34c936caf95
            }
         })
         const shuffledListFilms = shuffleListFilms(response.data.films)
         setFilms(shuffledListFilms)
      } catch (e) {
         alert(e)
      }
   }

   return (
      <ThemeProvider theme={theme}>
         <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100vh',
            label: '1'
         }}>
            <div>
               <Box sx={{
                  textAlign: 'center',
                  label: '2'
               }}>
                  <Poster img = {films[numFilm].posterUrlPreview}/>
                  <NameFilm name = {films[numFilm].nameRu}/>
                  <RandomFilmButton
                     onClick = {
                        ()=> {
                           if (numFilm<19) setNumFilm((numFilm)=>numFilm+1)
                           console.log(numFilm)
                        }
                     }
                  />
               </Box>
               <Grid container sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '30px auto 0',
                  maxWidth: '1400px',
               }}>
                  <Grid item container columnSpacing={25} rowSpacing={30} xs={12} sm={10} md={7} lg={6}>
                     <Grid item xs={6} md={6}>
                        <CountrySelect/>
                     </Grid>
                     <Grid item xs={6} md={6}>
                        <GenreSelect/>
                     </Grid>
                     <Grid item xs={6} md={6}>
                        <YearsSlider/>
                     </Grid>
                     <Grid item xs={6} md={6}>
                        <RatingSlider/>
                     </Grid>
                  </Grid>
               </Grid>
            </div>
         </Box>
      </ThemeProvider>
   )
      ;
}

export default App;
