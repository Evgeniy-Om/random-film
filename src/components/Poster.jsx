import {useEffect, useState} from "react";
import {Skeleton} from "@material-ui/core";

function Poster({src}) {
   const [isLoaded, setIsLoaded] = useState(false)

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
            variant="rectangle"
            animation="wave"
            width={250}
            height={350}
            sx={{display: isLoaded ? 'none' : 'block'}}
         />
      </div>
   )
}

export default Poster