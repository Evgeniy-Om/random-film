import {useDispatch, useSelector} from "react-redux";
import {selectRating} from "../toolkitRedux/toolkitSlice";
import {Box, Slider, Typography} from "@material-ui/core";

function RatingSlider() {
   const {selectedRating, marks} = useSelector(state => {
      /**
       * @param {{toolkit:string}} state
       */
      return state.toolkit.rating;
   })
   const dispatch = useDispatch()

   const handleChange = (event, newValue) => {
      dispatch(selectRating(newValue))
   }

   return (
      <Box ml={10} mr={10}>
         <Typography mb={10} ml={-10}>Год</Typography>
         <Slider
            value={[selectedRating[0],selectedRating[1]]}
            onChange={handleChange}
            marks={marks}
            valueLabelDisplay="auto"
            getAriaLabel = {() => "рейтинг"}
            getAriaValueText={()=>`${selectedRating} рейтинг`}
            min={marks[0].value}
            max={marks[1].value}
         />
      </Box>
   )
}

export default RatingSlider