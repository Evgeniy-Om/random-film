import {useAppSelector} from '../../hooks/redux'
import styles from './NameFilm.module.scss'

function NameFilm() {
    const {currentFilmNumber, listFilms} = useAppSelector(state => state.kinopoisk)
    const {nameRu, year, rating} = listFilms[currentFilmNumber]
    return (
        <div className={styles.root}>
            {nameRu &&
            <div className={styles.wrapper}>
                <span className={styles.nameFilm}>{`${nameRu} (${year})`}</span>
                <span className={styles.rating}>Рейтинг: {rating}</span>
            </div>}
        </div>
    )
}

export default NameFilm