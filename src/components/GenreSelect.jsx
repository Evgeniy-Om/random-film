import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import {Box} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {selectGenre} from "../toolkitRedux/toolkitSlice"


function GenreSelect() {
   const genre = useSelector(state => state.toolkit.genres.selectedGenre)
   const genreList = useSelector(state => state.toolkit.genres.list)
   const dispatch = useDispatch()

   const handleChange = (event) => {
      dispatch(selectGenre(event.target.value))
   }

   return (
      <Box mt={10}>
         <FormControl fullWidth>
            <InputLabel id="genre-select-label">Жанр</InputLabel>
            <Select
               labelId="genre-select-label"
               id="genre-select"
               value={genre}
               label="Genre"
               onChange={handleChange}
            >
               {genreList.map((item) => (
                  <MenuItem
                     key={item.id}
                     value={item.genre}
                  >
                     {item.genre}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </Box>
   );
}

export default GenreSelect