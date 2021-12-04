import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from "react-redux";
import {setupStore} from './store/store'
import './index.css'


ReactDOM.render(
   <Provider store={setupStore()}>
      <App/>
   </Provider>
   ,
   document.getElementById('root')
)