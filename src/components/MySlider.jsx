import {css} from "@emotion/css";
import {useState} from "react";
import {Slider} from "@material-ui/core";

function MySlider({marks, name, ariaLabel}) {
   const [value, setValue] = useState([marks[0].value, marks[1].value]);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   }

   return (
      <div className={css`        
        margin: 0 10px 0 10px;
      `}>
         <p className={css`margin: 0 0 10px -10px`}>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
         <Slider
            aria-label={ariaLabel}
            value={value}
            onChange={handleChange}
            marks={marks}
            valueLabelDisplay="auto"
            getAriaValueText={()=>`${value} год`}
            min={marks[0].value}
            max={marks[1].value}
         />
      </div>
   )
}

export default MySlider