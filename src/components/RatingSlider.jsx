import MySlider from "./MySlider"

const marks = [
   {
      value: 0,
      label: "0"
   },
   {
      value: 10,
      label: "10"
   }
];

function RatingSlider() {
   return (
      <MySlider marks={marks} name='рейтинг' ariaLabel="рейтинг"/>
   );
}

export default RatingSlider