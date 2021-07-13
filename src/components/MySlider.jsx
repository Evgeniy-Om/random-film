import {useState} from "react";
import {Box, Slider, Typography} from "@material-ui/core";

function MySlider({marks, name, ariaLabel}) {
   const [value, setValue] = useState([marks[0].value, marks[1].value]);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   }

   return (
      <Box ml={10} mr={10}>
         <Typography mb={10} ml={-10}>{name.charAt(0).toUpperCase() + name.slice(1)}</Typography>
         <Slider
            value={value}
            onChange={handleChange}
            marks={marks}
            valueLabelDisplay="auto"
            getAriaLabel = {()=> ariaLabel}
            getAriaValueText={()=>`${value} год`}
            min={marks[0].value}
            max={marks[1].value}
         />
      </Box>
   )
}

export default MySlider