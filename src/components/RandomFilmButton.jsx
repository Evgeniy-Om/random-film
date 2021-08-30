import {Button} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux";
import {numFilm} from "../toolkitRedux/toolkitSlice";

function RandomFilmButton() {
   const {currentFilmNumber, shuffledListFilms} = useSelector(state => state.toolkit)
   const dispatch = useDispatch()

   const changeNumFilm = () => {
      if (currentFilmNumber < shuffledListFilms.length - 1) dispatch(numFilm())
   }
   return (
      <Button
         onClick={changeNumFilm}
         variant="contained"
         color="primary"
         sx = {{
            '&.MuiButton-root': {
            padding: '10px 50px'
         }}}
      >
         Случайный фильм
      </Button>
   )
}

export default RandomFilmButton