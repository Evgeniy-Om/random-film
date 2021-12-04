import {useDispatch} from 'react-redux'
import {useAppSelector} from '../hooks/redux'
import {kinopoiskSlice} from '../store/kinopoiskSlice'
import {Box, Slider, Typography} from '@mui/material'

const thisYear = (new Date()).getFullYear()
const marks = [
   {
      value: 1920,
      label: "1920"
   },
   {
      value: thisYear,
      label: `${thisYear}`
   }
]

function YearsSlider() {
   const {selectedYears} = useAppSelector(state => state.kinopoisk)
   const {changeNumPageResponse, disableButton, isNewFilters, selectYears} = kinopoiskSlice.actions
   const dispatch = useDispatch()

   const handleChange = (event: Event, value: number | number[]) => {
      dispatch(selectYears(value as [number, number]))
      dispatch(isNewFilters(true))
      dispatch(changeNumPageResponse())
      dispatch(disableButton(false))
   }

   return (
      <Box ml={10} mr={10}>
         <Typography mb={10} ml={-10}>Год</Typography>
         <Slider
            value={[selectedYears[0], selectedYears[1]]}
            onChange={handleChange}
            marks={marks}
            valueLabelDisplay="auto"
            getAriaLabel={() => "диапазон лет"}
            getAriaValueText={() => `${selectedYears} год`}
            min={marks[0].value}
            max={marks[1].value}
         />
      </Box>
   )
}

export default YearsSlider