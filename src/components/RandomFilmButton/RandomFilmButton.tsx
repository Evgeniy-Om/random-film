import {useDispatch} from 'react-redux'
import {useAppSelector} from '../../hooks/redux'
import {kinopoiskSlice} from '../../store/kinopoiskSlice'
import {addFilmsToList, fetchFilms} from '../../store/kinopoiskAsyncThunks'
import styles from './RandomFilmButton.module.scss';
import {Button} from '@mui/material'

function RandomFilmButton() {
    console.log(styles)
    const {
        currentFilmNumber,
        listFilms,
        isChangedFilters,
        currentPageResponse,
        totalPagesResponse,
        isDisabledRandomFilmButton
    } = useAppSelector(state => state.kinopoisk)
    const {numFilm, changeNumPageResponse, disableButton} = kinopoiskSlice.actions
    const dispatch = useDispatch()

    const handleClick = () => {
        if (isChangedFilters) { // Пользователь поменял фильтры
            dispatch(fetchFilms()) // warning
        } else {
            if (currentFilmNumber < listFilms.length - 1) dispatch(numFilm()) //
            if (currentFilmNumber === listFilms.length - 6) { // Подгружаю ещё одну страницу с фильмами с API (до 20 фильмов за раз) и добавляю в имеющийся список фильмов
                if (currentPageResponse < totalPagesResponse) {
                    dispatch(changeNumPageResponse())
                    dispatch(addFilmsToList())  // warning
                    console.log(currentPageResponse, ' ', totalPagesResponse)
                }
            }
        }
    }
    if (currentFilmNumber === listFilms.length - 1 && !isChangedFilters)
        dispatch(disableButton(true))


    return (
        <Button
            className={styles.root}
            disabled={isDisabledRandomFilmButton}
            onClick={handleClick}
            variant="contained"
        >
            Случайный фильм
        </Button>
    )
}

export default RandomFilmButton