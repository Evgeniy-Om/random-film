import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import {Box} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {selectCountry} from "../toolkitRedux/toolkitSlice"

function CountrySelect() {
   const country = useSelector(state => state.toolkit.countries.selectedCountry)
   const countriesList = useSelector(state => state.toolkit.countries.list)
   const dispatch = useDispatch()

   return (
      <Box mt={10}>
         <FormControl fullWidth>
            <InputLabel id="country-select-label">Страна</InputLabel>
            <Select
               labelId="country-select-label"
               id="country-select"
               value={country}
               label="Country"
               onChange={e => dispatch(selectCountry(e.target.value))}
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