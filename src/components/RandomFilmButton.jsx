import {css} from "@emotion/css"
import {Button} from "@material-ui/core"
import {useSelector} from "react-redux"

function RandomFilmButton({onClick}) {
   const {selectedCountry, selectedGenre, years, rating, filmsAPI} = useSelector(state => state.toolkit)

   console.log(selectedCountry.id)
   console.log(selectedGenre.id)
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