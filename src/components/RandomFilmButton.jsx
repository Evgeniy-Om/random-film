import {css} from "@emotion/css"
import {Button} from "@material-ui/core"
import {useSelector} from "react-redux"

function RandomFilmButton({onClick}) {
   const {selectedCountry, genres, years, rating, filmsAPI} = useSelector(state => state.toolkit)

   const genreId = genres.list.filter((data) => data.genre === genres.selectedGenre)[0].id
   console.log(selectedCountry.id)
   console.log(genreId)
   return (
      <Button
         onClick={onClick}
         variant="contained"
         color="primary"
         className={css`
           &.MuiButton-root {
             padding: 10px 50px;
           }
         `}>
         Случайный фильм
      </Button>
   )
}

export default RandomFilmButton