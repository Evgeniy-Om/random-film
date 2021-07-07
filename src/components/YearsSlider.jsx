import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import {useState} from "react";

const marks = [
   {
      value: 1920,
      label: "1920"
   },
   {
      value: 2021,
      label: "2021"
   }
];

function valuetext(value) {
   return `${value} год`;
}

export default function YearsSlider() {
   const [value, setValue] = useState([1915, 2021]);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Box sx={{ width: 250, margin: 20 }}>
         <Slider
            getAriaLabel={() => "Диапазон лет"}
            value={value}
            onChange={handleChange}
            marks={marks}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={1920}
            max={2021}
         />
      </Box>
   );
}
