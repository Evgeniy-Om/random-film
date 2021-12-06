import {useAppSelector} from '../../hooks/redux'
import {Skeleton} from '@mui/material'
import styles from './NameFilm.module.scss'

function NameFilm() {
    const {currentFilmNumber, listFilms} = useAppSelector(state => state.kinopoisk)
    const {nameRu, year, rating} = listFilms[currentFilmNumber]
    return (
        <div className={styles._}>
            {nameRu
                ? <span className={styles.nameFilm}>
                    {nameRu} ({year}). Рейтинг: {rating}
                </span>
                : <Skeleton
                    className={styles.skeleton}
                    variant="text"
                    animation="wave"
                />
            }
        </div>
    )
}

export default NameFilm