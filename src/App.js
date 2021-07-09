import {Box, createTheme, Grid} from "@material-ui/core"
import {ThemeProvider} from "@material-ui/core/styles"
import {Poster, NameFilm, RandomFilmButton, CountrySelect, GenreSelect, YearsSlider, RatingSlider} from "./components"


const theme = createTheme({
   palette: {
      background: {
         default: "#c3ecff",
      }
   },
   spacing: 1
})

function App() {
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
