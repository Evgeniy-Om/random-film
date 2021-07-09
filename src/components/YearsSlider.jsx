import MySlider from "./MySlider"

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

function YearsSlider() {
   return (
      <MySlider marks={marks} name='год' ariaLabel="диапазон лет"/>
   );
}

export default YearsSlider