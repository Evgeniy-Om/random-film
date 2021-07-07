import Slider from "@material-ui/core/Slider"
import {useState} from "react"
import {css} from "@emotion/css"

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

function YearsSlider() {
   const [value, setValue] = useState([1915, 2021]);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <div className={css`
        width: 250px;
        margin: 20px
      `}>
         <p>Год</p>
         <Slider
            aria-label="Диапазон лет"
            value={value}
            onChange={handleChange}
            marks={marks}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={1920}
            max={2021}
         />
      </div>
   );
}

export default YearsSlider