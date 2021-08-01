import {useDispatch, useSelector} from "react-redux";
import {selectRating} from "../toolkitRedux/toolkitSlice";
import {Box, Slider, Typography} from "@material-ui/core";

const marks = [
   {
      value: 0,
      label: "0"
   },
   {
      value: 10,
      label: "10"
   }
]

function RatingSlider() {
   const {selectedRating} = useSelector(state => state.toolkit)
   const dispatch = useDispatch()

   const handleChange = (event, newValue) => {
      dispatch(selectRating(newValue))
   }

   return (
      <Box ml={10} mr={10}>
         <Typography mb={10} ml={-10}>Рейтинг</Typography>
         <Slider
            value={[selectedRating[0], selectedRating[1]]}
            onChange={handleChange}
            marks={marks}
            valueLabelDisplay="auto"
            getAriaLabel={() => "рейтинг"}
            getAriaValueText={() => `${selectedRating} рейтинг`}
            min={marks[0].value}
            max={marks[1].value}
         />
      </Box>
   )
}

export default RatingSlider