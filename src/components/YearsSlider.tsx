import {Box, Slider, Typography} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import {changeNumPageResponse, disableButton, isNewFilters, selectYears} from "../toolkitRedux/toolkitSlice"
import {RootState} from "../toolkitRedux"

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
   const {selectedYears} = useSelector((state: RootState) => state.toolkit)
   const dispatch = useDispatch()

   const handleChange = (event: Event, value: number | number[]) => {
      dispatch(selectYears(value))
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