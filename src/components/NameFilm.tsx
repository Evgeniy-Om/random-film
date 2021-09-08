import {Box, Skeleton, Typography} from "@material-ui/core"
import {useSelector} from "react-redux"
import {RootState} from "../toolkitRedux"

function NameFilm() {
   const {currentFilmNumber, listFilms} = useSelector((state: RootState) => state.toolkit)
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