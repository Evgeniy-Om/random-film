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
                  <Poster/>
                  <NameFilm/>
                  <RandomFilmButton/>
               </Box>
               <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '30px auto 0',
                  maxWidth: '1400px',
                  label: '3'
               }}>
                  <Grid container columnSpacing={25} rowSpacing={30} xs={12} sm={10}>
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
         </Box>
      </ThemeProvider>
   );
}

export default App;
