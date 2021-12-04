import {useEffect, useState} from 'react'
import {Skeleton} from '@material-ui/core'
import {useAppSelector} from '../hooks/redux'

function Poster() {

   const {currentFilmNumber, listFilms} = useAppSelector(state => state.kinopoisk)
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