import {useEffect, useState} from "react";
import {Skeleton} from "@material-ui/core";
import {useSelector} from "react-redux";
import {RootState} from "../toolkitRedux"

function Poster() {
   const {currentFilmNumber, listFilms} = useSelector((state: RootState) => state.toolkit)
   const [isLoaded, setIsLoaded] = useState(false)
   const src = listFilms[currentFilmNumber].posterUrlPreview


   useEffect(() => {
      setIsLoaded(false)
   }, [src])

   return (
      <div>
         <img src={src}
              onLoad={() => setIsLoaded(true)}
              alt="111"
              width="auto"
              height="350px"
              style={{display: isLoaded ? 'block' : 'none'}}
         />
         <Skeleton
            variant="rectangular"
            animation="wave"
            width={250}
            height={350}
            sx={{display: isLoaded ? 'none' : 'block'}}
         />
      </div>
   )
}

export default Poster