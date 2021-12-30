import React, {useEffect, useRef, useState} from 'react'
import {useAppSelector} from '../../hooks/redux'
import {Skeleton} from '@mui/material'
import styles from './Poster.module.scss'

function Poster() {
    const {currentFilmNumber, listFilms} = useAppSelector(state => state.kinopoisk)
    const [isLoaded, setIsLoaded] = useState(false)


    const src = listFilms[currentFilmNumber].posterUrlPreview
    const image = new Image()
    image.src = src

    const refPoster = useRef<HTMLDivElement>(null)
    const heightPoster = refPoster.current?.offsetHeight!
    const [heightImage, setHeightImage] = useState(heightPoster ?? 0)

    let movement_timer: NodeJS.Timeout

    useEffect(() => {
        setIsLoaded(false)
        image.onload = () => setIsLoaded(true)
        // if (isResizedWindow) {
        setHeightImage(heightPoster)
        // }
    }, [src])

    window.addEventListener('resize', () => {
        clearInterval(movement_timer)
        movement_timer = setTimeout(() => {
            if (heightPoster && heightImage !== heightPoster)
                setHeightImage(heightPoster)
        }, 100)
    })

    return (
        <div className={styles._} ref={refPoster}>
            <a href="#" className={isLoaded ? styles.link : 'disabled'}>
                <img src={src} className={styles.image} width="auto" height={`${heightPoster}px`}/>
            </a>
            <Skeleton
                className={isLoaded ? 'disabled' : styles.skeleton}
                width={heightImage ? heightImage * 0.66 : 0}
                variant="rectangular"
                animation="wave"
            />
        </div>
    )
}

export default Poster