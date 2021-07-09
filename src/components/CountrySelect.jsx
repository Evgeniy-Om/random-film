import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import {useState} from "react";
import {Box} from "@material-ui/core";

const countriesList = [
   {id: 0, country: "Все страны"},
   {id: 2, country: "Россия", addId: 13},
   {id: 1, country: "США"},
   {id: 25, country: "Австралия"},
   {id: 11, country: "Великобритания", addId: 38},
   {id: 3, country: "Германия", addId: 18},
   {id: 4, country: "Дания"},
   {id: 15, country: "Испания"},
   {id: 14, country: "Италия"},
   {id: 6, country: "Канада"},
   {id: 31, country: "Китай", addId: 28},
   {id: 26, country: "Корея Южная"},
   {id: 17, country: "Мексика"},
   {id: 8, country: "Франция"},
   {id: 5, country: "Швеция"},
   {id: 9, country: "Япония"},
]

function CountrySelect() {
   const [country, setCountry] = useState('Все страны')

   const handleChange = (event) => {
      setCountry(event.target.value)
   };

   return (
      <Box mt={10}>
         <FormControl fullWidth>
            <InputLabel id="country-select-label">Страна</InputLabel>
            <Select
               labelId="country-select-label"
               id="country-select"
               value={country}
               label="Country"
               onChange={handleChange}
            >
               {countriesList.map((item) => (
                  <MenuItem
                     key={item.id}
                     value={item.country}
                  >
                     {item.country}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </Box>
   );
}

export default CountrySelect