import {css} from "@emotion/css"
import {Button} from "@material-ui/core"

function RandomFilmButton({onClick}) {
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