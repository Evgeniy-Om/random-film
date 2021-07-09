import {css} from "@emotion/css"
import {Button} from "@material-ui/core"

function generateRandomFilm() {
   console.log(222);
}

function RandomFilmButton() {
   return (
      <Button
         onClick={generateRandomFilm}
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