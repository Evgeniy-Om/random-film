import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import {useState} from "react";
import {Box} from "@material-ui/core";

const genreList = [
   {id: 0, genre: "Все жанры"},
   {id: 1750, genre: "аниме"},
   {id: 22, genre: "биография"},
   {id: 3, genre: "боевик"},
   {id: 13, genre: "вестерн"},
   {id: 19, genre: "военный"},
   {id: 17, genre: "детектив"},
   {id: 456, genre: "детский"},
   {id: 12, genre: "документальный"},
   {id: 8, genre: "драма"},
   {id: 27, genre: "игра"},
   {id: 23, genre: "история"},
   {id: 6, genre: "комедия"},
   {id: 15, genre: "короткометражка"},
   {id: 16, genre: "криминал"},
   {id: 7, genre: "мелодрама"},
   {id: 14, genre: "мультфильм"},
   {id: 9, genre: "мюзикл"},
   {id: 10, genre: "приключения"},
   {id: 11, genre: "семейный"},
   {id: 24, genre: "спорт"},
   {id: 4, genre: "триллер"},
   {id: 1, genre: "ужасы"},
   {id: 2, genre: "фантастика"},
   {id: 18, genre: "фильм-нуар"},
   {id: 5, genre: "фэнтези"},
]

function GenreSelect() {
   const [genre, setGenre] = useState('Все жанры')

   const handleChange = (event) => {
      setGenre(event.target.value)
   };

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