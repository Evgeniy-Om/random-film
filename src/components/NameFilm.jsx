import {Box, Skeleton, Typography} from "@material-ui/core"
import {useSelector} from "react-redux"

function NameFilm() {
   const {currentFilmNumber, shuffledListFilms} = useSelector(state => state.toolkit)
   const name = shuffledListFilms[currentFilmNumber].nameRu
   const year = shuffledListFilms[currentFilmNumber].year
   return (
      <Box sx={{margin: '20px 0 30px'}}>
         {name
            ? <Typography sx={{
               fontSize: '25px',
               textAlign: 'center'
            }}>
               {name} ({year})
            </Typography>
            : <Skeleton variant='text' animation="wave" width={200} height={38}/>}
      </Box>
   )
}

export default NameFilm