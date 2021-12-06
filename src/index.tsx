import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import {Provider} from 'react-redux'
import {setupStore} from './store/store'
import './index.css'
import { StyledEngineProvider } from '@mui/material'


ReactDOM.render(
    <Provider store={setupStore()}>
        <StyledEngineProvider injectFirst>
            <App/>
        </StyledEngineProvider>
    </Provider>
    ,
    document.getElementById('root')
)