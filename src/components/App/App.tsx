import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import GenreSelect from '../GenreSelect'
import NameFilm from '../NameFilm/NameFilm'
import CountrySelect from '../CountrySelect'
import YearsSlider from '../YearsSlider'
import Poster from '../Poster/Poster'
import RandomFilmButton from '../RandomFilmButton/RandomFilmButton'
import RatingSlider from '../RatingSlider'
import {useAppSelector} from '../../hooks/redux'
import {kinopoiskSlice} from '../../store/kinopoiskSlice'
import {createTheme, ThemeProvider} from '@mui/material'
import styles from './App.module.scss'


const theme = createTheme({
    palette: {
        background: {
            default: '#c3ecff',
        }
    },
    spacing: 1
})

function App() {
    const {listFilms, currentPageResponse, status, error} = useAppSelector(state => state.kinopoisk)
    const {shuffle} = kinopoiskSlice.actions
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(shuffle())
    }, [dispatch])

    useEffect(() => {
        console.log(listFilms)
    }, [listFilms])

    useEffect(() => {
        console.log(`currentPageResponse: ${currentPageResponse}`)
    }, [currentPageResponse])

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.posterTitleButtonWrapper}>
                        <Poster/>
                        <NameFilm/>
                        <RandomFilmButton/>
                        {status === 'loading' && <h2>Загружается ....</h2>}
                        {error && <h2>Ошибка: {error}</h2>}
                    </div>
                    {/* Фильтры поиска*/}
                    <div className={styles.inputsWrapper}>
                        <CountrySelect/>
                        <GenreSelect/>
                        <YearsSlider/>
                        <RatingSlider/>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
