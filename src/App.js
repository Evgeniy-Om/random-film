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
         <Box width="100%" height="100vh" display="flex" flexDirection="column" justifyContent="center">
            <Box>
               <Box textAlign="center">
                  <Poster/>
                  <NameFilm/>
                  <RandomFilmButton/>
               </Box>
               <Box display="flex" justifyContent="center" m="30px auto" maxWidth={1400}>
                  <Grid container columnSpacing={25} xs={10}>
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
            </Box>
         </Box>
      </ThemeProvider>
   );
}

export default App;
