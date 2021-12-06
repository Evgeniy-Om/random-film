import {useEffect, useState} from 'react'
import {useAppSelector} from '../../hooks/redux'
import {Skeleton} from '@mui/material'
import styles from './Poster.module.scss'

function Poster() {

    const {currentFilmNumber, listFilms} = useAppSelector(state => state.kinopoisk)
    const [isLoaded, setIsLoaded] = useState(false)
    const src = listFilms[currentFilmNumber].posterUrlPreview


    useEffect(() => {
        setIsLoaded(false)
    }, [src])

    return (
        <div>
            <img
                className={isLoaded ? styles.poster : styles.posterDisabled}
                src={src}
                onLoad={() => setIsLoaded(true)}
                alt="111"
                width="auto"
                height="350px"
            />
            <Skeleton
                className={isLoaded ? styles.skeletonDisabled : styles.skeleton}
                variant="rectangular"
                animation="wave"
            />
        </div>
    )
}

export default Poster