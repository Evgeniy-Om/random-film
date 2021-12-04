import {useDispatch} from 'react-redux'
import {kinopoiskSlice} from '../store/kinopoiskSlice'
import {useAppSelector} from '../hooks/redux'
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material'

const countriesList = [
    {id: 0, country: "Все страны"},
    {id: 2, country: "Россия", addId: 13},
    {id: 1, country: "США"},
    {id: 25, country: "Австралия"},
    {id: 11, country: "Великобритания"},
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
    const {selectedCountry} = useAppSelector(state => state.kinopoisk)
    const {changeNumPageResponse, disableButton, isNewFilters, selectCountry} = kinopoiskSlice.actions
    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent) => {
        console.log(event)
        const newSelectedCountry =
            countriesList.filter(
                (data) => data.country === event.target.value
            )[0]
        dispatch(selectCountry(newSelectedCountry))
        dispatch(isNewFilters(true))
        dispatch(changeNumPageResponse())
        dispatch(disableButton(false))
    }

    return (
        <Box mt={10}>
            <FormControl fullWidth>
                <InputLabel id="country-select-label">Страна</InputLabel>
                <Select
                    labelId="country-select-label"
                    id="country-select"
                    value={selectedCountry.country}
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
    )
}

export default CountrySelect