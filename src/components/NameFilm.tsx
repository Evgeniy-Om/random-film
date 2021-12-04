import {useAppSelector} from '../hooks/redux'
import {Box, Skeleton, Typography} from '@mui/material'

function NameFilm() {
   const {currentFilmNumber, listFilms} = useAppSelector(state => state.kinopoisk)
   const {nameRu, year, rating} = listFilms[currentFilmNumber]
   return (
      <Box sx={{margin: '20px 0 30px'}}>
         {nameRu
            ? <Typography sx={{
               fontSize: '25px',
               textAlign: 'center'
            }}>
               {nameRu} ({year}). Рейтинг: {rating}
            </Typography>
            : <Skeleton variant='text' animation="wave" width={200} height={38}/>}
      </Box>
   )
}

export default NameFilm