import {useDispatch} from 'react-redux'
import {useAppSelector} from '../../hooks/redux'
import {kinopoiskSlice} from '../../store/kinopoiskSlice'
import {fetchFilms} from '../../store/kinopoiskAsyncThunks'
import styles from './RandomFilmButton.module.scss'
import {Button} from '@mui/material'
import {useEffect} from 'react'

function RandomFilmButton() {
    const {
        currentFilmNumber,
        listFilms,
        isChangedFilters,
        currentPageResponse,
        totalPagesResponse,
        isDisabledRandomFilmButton,
        status
    } = useAppSelector(state => state.kinopoisk)
    const {numFilm, changeNumPageResponse, disableButton} = kinopoiskSlice.actions
    const dispatch = useDispatch()

    useEffect(() => {
        // console.log(isChangedFilters)
        if (isChangedFilters) dispatch(changeNumPageResponse())
        },[isChangedFilters]
    )

    // useEffect(() => {
    //         console.log("current: ", currentPageResponse)
    //     },[currentPageResponse]
    // )

    const handleClick = () => {
        try {
            // console.log(currentFilmNumber)
            if (isChangedFilters) { // Пользователь поменял фильтры
                dispatch(fetchFilms())
            } else {
                if (currentFilmNumber < listFilms.length - 1) {
                    dispatch(numFilm(currentFilmNumber+1))
                }
                if (currentFilmNumber === listFilms.length - 8) { // Подгружаю ещё одну страницу с фильмами с API (до 20 фильмов за раз) и добавляю в имеющийся список фильмов
                    if (currentPageResponse < totalPagesResponse) {
                        dispatch(changeNumPageResponse())
                        dispatch(fetchFilms())
                        console.log(currentPageResponse, ' ', totalPagesResponse)
                    }
                }
                if (currentFilmNumber === listFilms.length - 1) {
                    dispatch(disableButton(true))
                }
            }

        } catch (e) {
            console.log(e)
        }
    }



    return (
        <div>
            {
                isChangedFilters && <div>
                    <Button
                        className={styles._}
                        disabled={isDisabledRandomFilmButton}
                        onClick={handleClick}
                        variant="contained"
                    >
                        Новый поиск
                    </Button>
                    {
                        status === 'loading' &&
                        <CircularProgress className={styles.spinner} size={30}/>
                    }
                </div>
            }
            {
                !isChangedFilters && <Button
                    className={styles._}
                    disabled={isDisabledRandomFilmButton}
                    onClick={handleClick}
                    variant="contained"
                >
                    Случайный фильм
                </Button>
            }
        </div>
    )
}

export default RandomFilmButton